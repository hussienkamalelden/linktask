import React, { Component } from 'react';
import "./news_card_style.scss"
import CardImg from "../../assets/images/card_img.png"

class NewsCard extends Component {
    state = {}

    // onclick Menu Toggle ..
    shareToggle = () => {
        let shareIconHolder = document.querySelector('.setting-share-links-holder')
        shareIconHolder.classList.toggle('setting-share-links-holder-active');
    }
    // Start Favourite Activation ..
    favActivation = () => {
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
                <article className="news-card col-xl-4 col-md-6 col-12">
                    <div className="news-card-holder">
                        <img className="news-card-image" src={CardImg} alt="news card image" />
                        <section className="news-card-content">
                            {/* Start Card Settings */}
                            <section className="news-card-setting">
                                {/* Start Favourite Settings */}
                                <div className="news-card-setting-fav">
                                    <i className="setting-icon setting-fav-icon far fa-heart" onClick={this.favActivation}></i>
                                    <i className="setting-icon setting-fav-icon-active fas fa-heart" onClick={this.favActivation}></i>
                                </div>
                                {/* End Favourite Settings */}

                                {/* Start Share Settings */}
                                <div className="news-card-setting-share">
                                    <i className="setting-icon setting-share-icon fas fa-share-alt" onClick={this.shareToggle}></i>
                                    <div className="setting-share-links-holder">
                                        <a className="setting-share-links" href="#"><i className="setting-share-links-icon fab fa-facebook-f"></i></a>
                                        <a className="setting-share-links" href="#"><i className="setting-share-links-icon fab fa-twitter"></i></a>
                                        <a className="setting-share-links" href="#"><i className="setting-share-links-icon fas fa-envelope"></i></a>
                                    </div>
                                </div>
                                {/* End Share Settings */}
                            </section>
                            {/* End Card Settings */}

                            {/* Start Card Title */}
                            <h4 className="news-card-title">President El Sisis Unveils "Egypt vision 2030"</h4>
                            {/* End Card Title */}

                            {/* Start Card Tags */}
                            <section className="news-card-tags">
                                <span className="card-tags">News</span>
                                <span className="card-tags">Products</span>
                            </section>
                            {/* End Card Tags */}

                            {/* Start Card Paragraph */}
                            <p className="news-card-p">If you prefer to have a more personalized tour of the Grand Egyptian Museum, you can choose one of the thematic tours in Guided Tours, And the Egyptian</p>
                            {/* End Card Paragraph */}

                            {/* Start Card Date */}
                            <section className="date-holder">
                                <i className="date-icon far fa-calendar-alt"></i>
                                <span className="date-text">Wed 12 Aug 2020 - Sun 12 oct 2020</span>
                            </section>
                            {/* End Card Date */}
                        </section>
                    </div>
                </article>
            </React.Fragment>
        );
    }
}

export default NewsCard;