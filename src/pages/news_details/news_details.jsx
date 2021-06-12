import React, { Component } from 'react';
import "./news_details_style.scss"
import Header from './header/header';
import Details from './details/details';
import RelatedTopics from './related_topics/related_topics';

class NewsDetails extends Component {
    state = {}
    componentDidMount() {
        document.title = "News Details"
    }
    render() {
        return (
            <React.Fragment>
                <div className="bg-holder">
                    <Header />
                    <Details />
                    <RelatedTopics />
                </div>
            </React.Fragment>
        );
    }
}

export default NewsDetails;