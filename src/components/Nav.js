import React, {Component} from 'react';
import logo from '../logo.svg';

class Nav extends Component {
    render() {
        return (
            <nav>
                <div className="container">
                    <div className="nav-wrapper">
                        <a href="" className="brand-logo">
                            <img src={logo} className="App-logo" alt="logo"/>
                        </a>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><a href="">Sass</a></li>
                            <li><a href="">Components</a></li>
                            <li><a href="">JavaScript</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Nav;
