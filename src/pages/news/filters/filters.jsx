import React, { Component } from 'react';
import { Dropdown } from "react-bootstrap"
import "./filters_style.scss";

class Filters extends Component {
    state = {}

    render() {
        return (
            <React.Fragment>
                <article className="filters">
                    <div className="container">
                        <section className="filters-holder">
                            {/* Start From Box */}
                            <section className="filters-from-box filters-boxes">
                                <h6 className="filters-box-title">From</h6>
                                <div className="filters-box-date-holder">
                                    <div className="filters-box-date-overlay">
                                        <span className="filters-box-date-overlay-text">Select</span>
                                        <i className="filters-box-date-overlay-icon far fa-calendar-alt"></i>
                                    </div>
                                    <input className="filters-box-date" type="date" />
                                </div>
                            </section>
                            {/* End From Box */}
                            {/* Start To Box */}
                            <section className="filters-to-box filters-boxes">
                                <h6 className="filters-box-title">To</h6>
                                <div className="filters-box-date-holder">
                                    <div className="filters-box-date-overlay">
                                        <span className="filters-box-date-overlay-text">Select</span>
                                        <i className="filters-box-date-overlay-icon far fa-calendar-alt"></i>
                                    </div>
                                    <input className="filters-box-date" type="date" />
                                </div>
                            </section>
                            {/* End To Box */}
                            {/* Start Category Box */}
                            <section className="filters-category-box filters-boxes">
                                <h6 className="filters-box-title">Category</h6>
                                <Dropdown>
                                    <Dropdown.Toggle className="filters-category-box-toggle" variant="success" id="dropdown-basic">
                                        Select
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className="filters-category-box-menu">
                                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </section>
                            {/* End Category Box */}
                            {/* Start Search Box */}
                            <section className="filters-search-box filters-boxes">
                                <div className="filters-search-box-holder">
                                    <input className="filters-search-box-area" type="search" placeholder="Search Services" />
                                    <input className="filters-search-box-submit" type="submit" value="" />
                                </div>
                            </section>
                            {/* End Search Box */}
                            {/* Start Sort Box */}
                            <section className="filters-sort-box">
                                <span className="filters-sort-box-title">Sort by</span>
                            </section>
                            {/* End Sort Box */}
                        </section>
                    </div>
                </article>
            </React.Fragment>
        );
    }
}

export default Filters;