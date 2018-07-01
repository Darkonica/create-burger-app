import React from "react";

import Button from "../../UI/Button/Button";

const OrderSummary = props => {
	const ingredientSummary = Object.keys(props.ingredients).map(ingKey => {
		return (
			<li key={ingKey}>
				<span className="text-capitalize">{ingKey}</span>:{" "}
				{props.ingredients[ingKey]}
			</li>
		);
	});

	return (
		<div>
			<h3>Your Order</h3>
			<p>A delicious burger with the following ingredients:</p>
			<ul>{ingredientSummary}</ul>
			<p>
				<strong>Total price: {props.price.toFixed(2)}$</strong>
			</p>
			<p>Continue to Checkout?</p>
			<Button btnType="danger" clicked={props.cancel}>
				Cancel
			</Button>
			<Button btnType="success" clicked={props.continue}>
				Continue
			</Button>
		</div>
	);
};

export default OrderSummary;
