import React from 'react';
import "./ArticleSummary.scss";
import cage from "../../assets/images/cage.jpg";

const ArticleSummary = ({ articles }) => {
    const articleClass = "article-summary";
    
    return articles.map(({ title, description, author }) => {
        return (
            <>
                <div className={articleClass+" flexbox"}>
                    <section class="flexbox">
                        <h4 className="article-summary__title">{title}</h4>
                        <p className="article-summary__description">{description}</p>
                        <small className="article-summary__author">{author}</small>
                    </section>
                    <section class="flexbox">
                        <img className="article-summary__thumbnail" src={cage} alt="Article Thumbnail" />
                    </section>
                </div>
            </>
        )
    })
}

export default ArticleSummary;