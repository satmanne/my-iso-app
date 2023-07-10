import React from 'react';
import './SadhguruDemoCard.css';

const SadhguruDemoCard = ({ videoDesc, heading, date, videoIcon, shareIcon, sadhguruPic }) => {
  return (
    <div className="sadhguru-demo-card">
      <img src={sadhguruPic.url} alt={sadhguruPic.alt} />
      <h2>{heading}</h2>
      <p>{videoDesc}</p>
      <p>{date}</p>
      <img src={videoIcon.url} alt={videoIcon.alt} />
      <img src={shareIcon.url} alt={shareIcon.alt} />
    </div>
  );
};

// Usage example and export statement remains the same

export default SadhguruDemoCard;
