import React from 'react';
import "./ArticleSummary.scss";
import cage from "../../assets/images/cage.jpg";

const ArticleSummary = ({ articles }) => {
    const articleClass = "article-summary";
    
    return articles.map(({ title, description, author }) => {
        return (
            <>
                <div className={articleClass+" flexbox"}>
                    <section className="flexbox">
                        <h4 className={articleClass+"__title"}>{title}</h4>
                        <p className={articleClass+"__description"}>{description}</p>
                        <small className={articleClass+"__author"}>{author}</small>
                    </section>
                    <section className="flexbox">
                        <img className={articleClass+"__thumbnail"} src={cage} alt="Thumbnail" />
                    </section>
                </div>
            </>
        );
    });
}

export default ArticleSummary;