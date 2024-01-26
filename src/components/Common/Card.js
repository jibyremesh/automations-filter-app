import React from 'react';
import '../../styles/Card.css';

/**
 * Card component to preview each automation item that 
 * accepts the item's short description, logo and title as inputs.
 * 
 * @author Jiby Remesh
 * @version 1.0
 * @since 2024-01-23
 */


const Card = ({ data }) => {
  const { shortDescription, sites } = data;

  return (
    <div className="card">
      <span className="logo-container">
        <img src={sites[0].logoSmall2x} alt={sites[0].title} />
      </span>
      <div className="content">
        <span className="company-name">{sites[0].title}</span>
        <p className="text-grey">{shortDescription}</p>
      </div>
    </div>
  );
};

export default Card;
