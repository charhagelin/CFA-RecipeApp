import React from 'react';
import PropTypes from 'prop-types';
import './App.css';
import IngredientCard from './IngredientCard';

const IngredientList = (props) => {
	return (
    <div>
		   {props.ingredients.map((ingredient, i) => <IngredientCard key={i} ingredient={ingredient}/>)}
    </div>
	)
};

IngredientList.propTypes = {
	ingredients: PropTypes.array.isRequired
};

export default IngredientList;
