import React, { Component } from 'react';
import "./navbar_style.scss"
import logo from "../../assets/images/logo.png"

class Navbar extends Component {
    state = {}
    // onclick Menu Toggle ..
    menuToggle = () => {
        let menu = document.querySelector('.menu-icon')
        let dropdown = document.querySelector('.dropdown-slide')
        menu.classList.toggle('open');
        dropdown.classList.toggle('dropdown-tog');
    }
    render() {
        return (
            <React.Fragment>
                <article className="nav-holder">
                    <section className="navbar fixed-top">
                        <div className="container">
                            <div className="holder">
                                <section className="nav-left">
                                    <div className="menu-icon" onClick={this.menuToggle}>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                    <a className="main-logo" href="#">
                                        <img src={logo} alt="link development logo" />
                                    </a>
                                </section>
                                <section className="nav-right">
                                    <a className="main-logo" href="#">
                                        <img src={logo} alt="link development logo" />
                                    </a>
                                </section>
                            </div>
                            <section className="dropdown-slide">

                            </section>
                        </div>
                    </section>
                </article>
            </React.Fragment>
        );
    }
}

export default Navbar;