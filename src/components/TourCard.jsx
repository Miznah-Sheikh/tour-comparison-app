import React, { useState } from "react";

function TourCard({ id, name, info, image, price, onRemove }) {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="tour-card">
      <img src={image} alt={name} className="tour-img" />
      <div className="tour-details">
        <h2>{name}</h2>
        <h4>${price}</h4>
        <p>
          {showMore ? info : `${info.substring(0, 150)}...`}
          <button className="toggle-btn" onClick={() => setShowMore(!showMore)}>
            {showMore ? "Show Less" : "Read More"}
          </button>
        </p>
        <button className="remove-btn" onClick={() => onRemove(id)}>
          Not Interested
        </button>
      </div>
    </div>
  );
}

export default TourCard;
