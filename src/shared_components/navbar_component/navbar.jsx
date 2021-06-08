import React, { Component } from 'react';
import "./navbar_style.scss"
import logo from "../../assets/images/logo.png"
import { Link } from 'react-router-dom';

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
                                <div className="dropdown-left">
                                    <div className="dropdown-media">
                                        <a className="social-links" href="#"><i className="icons fab fa-twitter"></i></a>
                                        <a className="social-links" href="#"><i className="icons fab fa-facebook-f"></i></a>
                                        <a className="social-links" href="#"><i className="icons fab fa-linkedin-in"></i></a>
                                        <a className="social-links" href="#"><i className="icons fab fa-youtube"></i></a>
                                        <a className="social-links" href="#"><i className="icons fab fa-instagram"></i></a>
                                    </div>
                                </div>
                                <div className="dropdown-right">
                                    {/* Start Top Section */}
                                    <div className="dropdown-right-top">
                                        <ul className="nav-dropdown-top-ul">
                                            <li className="nav-dropdown-top-li"><a className="nav-dropdown-main-links nav-dropdown-links-active" href="#">Home</a></li>
                                            <li className="nav-dropdown-top-li"><a className="nav-dropdown-main-links" href="#">About us</a>
                                                <ul className="nav-dropdown-top-sub-ul">
                                                    <li className="nav-dropdown-top-sub-li"><a href="#" className="nav-dropdown-main-sub-links">who are us</a></li>
                                                    <li className="nav-dropdown-top-sub-li"><a href="#" className="nav-dropdown-main-sub-links">why us?</a></li>
                                                </ul>
                                            </li>
                                            <li className="nav-dropdown-top-li"><a className="nav-dropdown-main-links" href="#">News</a>
                                                <ul className="nav-dropdown-top-sub-ul">
                                                    <li className="nav-dropdown-top-sub-li"><a href="#" className="nav-dropdown-main-sub-links">News</a></li>
                                                    <li className="nav-dropdown-top-sub-li"><a href="#" className="nav-dropdown-main-sub-links">Events</a></li>
                                                </ul>
                                            </li>
                                            <li className="nav-dropdown-top-li"><a className="nav-dropdown-main-links" href="#">Careers</a>
                                                <ul className="nav-dropdown-top-sub-ul">
                                                    <li className="nav-dropdown-top-sub-li"><a href="#" className="nav-dropdown-main-sub-links">Opportunities</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* End Top Section */}
                                    {/* Start Search Section */}
                                    <form className="search-box">
                                        <input className="search inputs" type="search" name="search" placeholder="Search" />
                                        <input className="submit inputs" type="submit" value="" />
                                    </form>
                                    {/* End Search Section */}
                                    {/* Start Bottom Section */}
                                    <div className="dropdown-right-bottom">
                                        <ul className="nav-dropdown-bottom-ul">
                                            <li className="nav-dropdown-bottom-li"><a className="nav-dropdown-main-links" href="#">Contact Us</a></li>
                                            <li className="nav-dropdown-bottom-li"><a className="nav-dropdown-main-links" href="#">Site Map</a></li>
                                        </ul>
                                    </div>
                                    {/* End Bottom Section */}
                                </div>
                            </section>
                        </div>
                    </section>
                </article>
            </React.Fragment>
        );
    }
}

export default Navbar;