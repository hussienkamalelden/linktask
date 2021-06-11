import React, { Component } from 'react';
import "./latestnews_style.scss"
import NewsCard from '../../../shared_components/news_card_component/news_card';

class LatestNews extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <article className="latestnews">
                    <div className="latestnews-holder">
                        <div className="container">
                            <h2 className="latestnews-title">LatestNews</h2>
                            <div className="row">
                                <NewsCard />
                                <NewsCard />
                                <NewsCard />
                            </div>
                        </div>
                    </div>
                </article>
            </React.Fragment>
        );
    }
}

export default LatestNews;