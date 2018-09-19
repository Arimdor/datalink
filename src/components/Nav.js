import React, {Component} from 'react';
import logo from '../logo.svg';

class Nav extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <span className="text-monospace">DATALINK 718th</span>
                    </a>
                </div>
            </nav>
        )
    }
}

export default Nav;
