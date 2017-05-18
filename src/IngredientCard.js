import React from 'react';
import PropTypes from 'prop-types';
import './App.css';

const IngredientCard = (props) => {
	return (
    <div className="flexcontainer">
      <div className="flex-item-front">
        {props.ingredient.name}
      </div>
      <div className="flex-item-back">
        <p> 'the backside of the card' </p>
      </div>
    </div>
	)
};

IngredientCard.propTypes = {
	ingredient: PropTypes.object.isRequired
};

export default IngredientCard;
