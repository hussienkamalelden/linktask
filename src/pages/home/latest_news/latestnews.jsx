import React, { Component } from 'react';
import "./latestnews_style.scss"
import NewsCard from '../../../shared_components/news_card_component/news_card';
import NewsApi from '../../../newsapi.json';

class LatestNews extends Component {
    state = {
        articlesArr: NewsApi.articles
    }

    // onclick Share Toggle ..
    shareToggle = (data) => {
        let shareIconHolder = document.querySelector('.setting-share-links-holder')
        shareIconHolder.classList.toggle('setting-share-links-holder-active');
    }
    // Start Favourite Activation ..
    favActivation = (data) => {
        console.log(data)
        let favIconDeactivate = document.querySelector(".setting-fav-icon");
        let favIconActivate = document.querySelector(".setting-fav-icon-active");
        if (window.getComputedStyle(favIconActivate).display === "none") {
            favIconDeactivate.style.display = "none";
            favIconActivate.style.display = "inline-block";
        } else {
            favIconActivate.style.display = "none";
            favIconDeactivate.style.display = "inline-block";
        }
    }

    render() {
        return (
            <React.Fragment>
                <article className="latestnews">
                    <div className="latestnews-holder">
                        <div className="container">
                            <h2 className="latestnews-title">LatestNews</h2>
                            <div className="row">
                                {this.state.articlesArr.map(data => {
                                    if (data.showOnHomepage === true) {
                                        return <NewsCard
                                            key={data.id}
                                            data={data}
                                            shareToggle={this.shareToggle}
                                            favActivation={this.favActivation} />
                                    }
                                })}
                            </div>
                        </div>
                    </div>
                </article>
            </React.Fragment>
        );
    }
}

export default LatestNews;