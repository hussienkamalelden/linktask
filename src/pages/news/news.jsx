import React, { Component } from 'react';
import Filters from './filters/filters';
import Header from './header/header';
import NewsHolder from './news_holder/news_holder';
import Pagination from './pagination/pagination';
import "./news_style.scss"
import NewsApi from '../../newsapi.json';

class News extends Component {
    state = {
        articlesArr: NewsApi.articles,
        articlesFilter: NewsApi.articles
    }
    componentDidMount() {
        document.title = "News"
    }

    search = (text) => {
        let oldArr = [...this.state.articlesArr];
        let newArr = oldArr.filter(da => {
            let title = da.title.toLowerCase();
            if (title.includes(text.toLowerCase())) {
                return da
            } else {
                return "";
            }
        })
        this.setState({ articlesFilter: newArr });
    }

    render() {
        return (
            <React.Fragment>
                <div className="bg-holder">
                    <Header />
                    <Filters search={this.search} />
                    <NewsHolder data={this.state.articlesFilter} />
                    <Pagination />
                </div>
            </React.Fragment>
        );
    }
}

export default News;