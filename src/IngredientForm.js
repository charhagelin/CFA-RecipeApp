import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

class IngredientForm extends Component {
	handleInputChange(e) {
		// not used, just for reference
		// console.log(e.target.value)
	};

	focus() {
    // Explicitly focus the text input using the raw DOM API
    this.nameInput.focus();
  };

  newIngredient() {
  	const URL = 'https://dry-ridge-24901.herokuapp.com/api/v1/ingredients';
  	axios.post(URL + '?ingredient_name=' + this.nameInput.value)
  		.then((response) => {
  			console.log(response);
  			// reset value of input field
  			this.nameInput.value = '';
  			this.props.getIngredientList();
  		})
  		.catch(function(error) {
  			console.log(error)
  		});
  };

	render() {
		return (
			<div>
				<input
					type="text"
					ref={(input) => { this.nameInput = input; }}
					onChange={(e) => this.handleInputChange(e)} />
				<button onClick={() => this.newIngredient()}>Create!!</button>
			</div>
		)
	};
}

IngredientForm.propTypes = {
	getIngredientList: PropTypes.func.isRequired
};

export default IngredientForm;
