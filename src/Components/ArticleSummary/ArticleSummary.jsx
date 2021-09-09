import React from 'react';
import "./ArticleSummary.scss";

const ArticleSummary = ({ articles }) => {
    return articles.map(({ title, description, author, link, thumbnail }) => {
        const imagesURL = process.env.PUBLIC_URL + thumbnail;

        return (
            <>
                <div className={"article-summary flex"}>
                    <section className="flex">
                        <h4 className={"article-summary__title"}>
                            <a href={link} target="_blank" rel="noreferrer">{title}</a>
                        </h4>
                        <p className={"article-summary__description"}>{description}</p>
                        <small className={"article-summary__author"}>{author}</small>
                    </section>
                    <section className="flex">
                        <img className={"article-summary__thumbnail"} src={imagesURL} alt="Thumbnail" />
                    </section>
                </div>
            </>
        );
    });
}

export default ArticleSummary;