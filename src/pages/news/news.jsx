import React, { Component } from 'react';
import Filters from './filters/filters';
import Header from './header/header';
import NewsHolder from './news_holder/news_holder';
import Pagination from './pagination/pagination';
import "./news_style.scss"

class News extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <div className="bg-holder">
                    <Header />
                    <Filters />
                    <NewsHolder />
                    <Pagination />
                </div>
            </React.Fragment>
        );
    }
}

export default News;