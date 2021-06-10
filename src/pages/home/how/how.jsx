import React, { Component } from 'react';
import "./how_style.scss"

class How extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <article className="how">
                    <div className="how_overlay"></div>
                    <div className="container">
                        <div className="how-holder">
                            <h2 className="how-main-title">How we have helped</h2>
                            <p className="how-main-subtitle">See how AI Foundation have promoted change locally and to the world</p>
                        </div>
                    </div>
                </article>
            </React.Fragment>
        );
    }
}

export default How;