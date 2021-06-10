import React, { Component } from 'react';
import "./latestnews_style.scss"
import NewsCard from '../../../shared_components/news_card_component/news_card';

class LatestNews extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <h1>LatestNews</h1>
                <NewsCard />
            </React.Fragment>
        );
    }
}

export default LatestNews;