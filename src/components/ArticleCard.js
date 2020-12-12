import React from 'react';
import Img from 'gatsby-image';

export default ({ article, className }) => {
  const renderImg = (img) => {
    if (img) {
      return <Img alt="" sizes={img.sizes} />;
    }
    // placeholder white square
    return (
      <svg>
        <rect width="100%" height="100%" fill="white" />
      </svg>
    );
  };
  return (
    <div className={'tile ' + className}>
      <span className="image">{renderImg(article.image)}</span>
      <a target="_blank" rel="noopener noreferrer" href={article.url}>
        <h2>{article.title}</h2>
      </a>
    </div>
  );
};
