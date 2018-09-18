import React, {Component} from 'react';
import './App.css';

import firebase from 'firebase';
import {DB_CONFIG} from './config/config';
import 'firebase/database';

import Nav from './components/Nav';
import Map from './components/Map';
import TargetCard from './components/TargetCard';

class App extends Component {
    constructor() {
        super();
        this.state = {
            targets: []
        };
        this.app = firebase.initializeApp(DB_CONFIG);
        this.db = this.app.database().ref().child('target');
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
                <Nav> </Nav>
                <div className="container">
                    <div className="row" style={{marginTop: '5vh'}}>
                        <div className="col s12 m6">
                            <Map/>
                        </div>
                        <div className="col s12 m6">
                            <TargetCard/>
                        </div>
                    </div>
                </div>
                /* Floating Butoon */
                <div className="fixed-action-btn">
                    <a className="btn-floating btn-large red">
                        <i className="fas fa-plus"/>
                    </a>
                    <ul>
                        <li><a className="btn-floating red"><i className="material-icons">insert_chart</i></a></li>
                        <li><a className="btn-floating yellow darken-1"><i className="material-icons">format_quote</i></a></li>
                        <li><a className="btn-floating green"><i className="material-icons">publish</i></a></li>
                        <li><a className="btn-floating blue"><i className="material-icons">attach_file</i></a></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default App;
