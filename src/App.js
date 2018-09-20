import React from 'react';
import './App.css';

import firebase from 'firebase';
import {DB_CONFIG} from './config/config';
import 'firebase/database';

import Nav from './components/Nav';
import Map from './components/Map';
import TargetCard from './components/TargetCard';
import Form from './components/Form'

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            targets: [],
        };
        this.app = firebase.initializeApp(DB_CONFIG);
        this.db = this.app.database().ref().child('target');
    }

    showModal() {
        this.refs.form.toggle();
    }

    addTarget(target) {
        console.log(target);
        this.db.push().set(target)
    }

    deleteTarget(id) {
        console.log(id);
        if (window.confirm('Are you sure you want delete')) {
            this.db.child(id).remove().then(
                this.render()
            );
        }
    }

    componentDidMount() {
        const {targets} = this.state;
        this.db.on('child_added', snap => {
            targets.push({
                id: snap.key,
                type: snap.val().type,
                lat: snap.val().lat,
                lng: snap.val().lng,
                status: snap.val().status
            });
            this.setState({targets});
            console.log(targets);

        });

        this.db.on('child_removed', snap => {
            for (let i = 0; i < targets.length; i++) {
                if (targets[i].id === snap.key) {
                    targets.splice(i, 1);
                    break;
                }
            }
            this.setState({targets});
        });
    }

    render() {
        return (
            <div className="App">
                <Nav/>
                <div className="container-fluid pb-5">
                    <Form ref="form" addTarget={this.addTarget.bind(this)}/>
                    <div className="row" style={{marginTop: '2rem'}}>
                        <div className="col-md-5 offset-md-1">
                            <Map/>
                        </div>
                        <div className="col-md-5 mt-4 mt-md-0">
                            <TargetCard targets={this.state.targets} deleteTarget={this.deleteTarget.bind(this)} showModal={this.showModal.bind(this)}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default App;
