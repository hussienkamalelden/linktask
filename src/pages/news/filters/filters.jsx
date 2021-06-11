import React, { Component } from 'react';
import "./filters_style.scss";

class Filters extends Component {
    state = {}

    render() {
        return (
            <React.Fragment>
                <article className="filters">
                    <div className="container">
                        <section className="filters-holder">
                            <section className="filters-from-box">
                                <h6 className="filters-box-title">From</h6>
                            </section>
                            <section className="filters-to-box">
                                <h6 className="filters-box-title">To</h6>
                            </section>
                            <section className="filters-category-box">

                            </section>
                            <section className="filters-search-box">

                            </section>
                            <section className="filters-sort-box">

                            </section>
                        </section>
                    </div>
                </article>
            </React.Fragment>
        );
    }
}

export default Filters;