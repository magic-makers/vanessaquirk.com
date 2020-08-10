import React from 'react';
import Img from 'gatsby-image';

export default ({ article, className }) => {
  return (
    <div className={'tile ' + className}>
      <span className="image">
        <Img alt="" sizes={article.image.sizes} />
      </span>
      <a target="_blank" rel="noopener noreferrer" href={article.url}>
        <h2>{article.title}</h2>
        <div className="content">
          <p>{article.description.description}</p>
          <small>{article.articlePublishedTime}</small>
        </div>
      </a>
    </div>
  );
};
