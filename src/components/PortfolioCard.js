import React from 'react';

const PortfolioCard = ({ title, imageUrl, description, linkUrl, linkText }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt={title} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        <a href={linkUrl} className="card-link">
          {linkText}
        </a>
      </div>
    </div>
  );
};

export default PortfolioCard;