import React, {Component} from 'react';
import logo from '../logo.svg';

class Nav extends Component {
    render() {
        return (
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <div className="col-md-1 d-none d-md-inline p-0 m-0"/>
                    <div className="col-12 col-md-11 mx-md-0 px-md-0">
                        <a className="navbar-brand" href="#">
                            <img src={logo} className="App-logo" alt="logo"/>
                            <span className="text-monospace">DATALINK 718th</span>
                        </a>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Nav;
