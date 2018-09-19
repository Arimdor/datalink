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
            modal: false,
        };
        this.app = firebase.initializeApp(DB_CONFIG);
        this.db = this.app.database().ref().child('target');
    }

    showModal() {
        this.refs.form.toggle();
    }

    componentDidMount() {
        const {targets} = this.state;
        this.db.on('child_added', snap => {
            targets.push({
                id: snap.key,
                type: snap.type,
                lat: snap.lat,
                lng: snap.lng,
                state: snap.state
            });
            this.setState({targets})
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
                <div className="container">
                    <Form ref="form"/>
                    <div className="row" style={{marginTop: '5vh'}}>
                        <div className="col-md-6">
                            <Map/>
                        </div>
                        <div className="col-md-6">
                            <TargetCard showModal={this.showModal.bind(this)}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default App;
