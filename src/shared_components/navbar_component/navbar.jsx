import React, { Component } from 'react';
import "./navbar_style.scss"
import logo from "../../assets/images/logo.png"

class Navbar extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <article className="g-navbar">
                    <div className="holder">
                        <nav className="navbar sticky-top navbar-expand-lg">
                            <div className="container">
                                <a className="navbar-brand" href="#">
                                    <img src={logo} alt="link development logo" />
                                </a>
                            </div>
                        </nav>
                    </div>
                </article>
            </React.Fragment>
        );
    }
}

export default Navbar;