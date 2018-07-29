import React from "react";

import "./Order.css";

const Order = props => {
	const ingredients = [];

	for (let ingredientName in props.ingredients) {
		ingredients.push({
			name: ingredientName,
			amount: props.ingredients[ingredientName]
		});
	}

	const ingredientOutput = ingredients.map(ing => {
		return (
			<span key={ing.name} className="order_ingredient">
				{ing.name} ({ing.amount})
			</span>
		);
	});

	return (
		<div className="order">
			<p>Ingredients: {ingredientOutput}</p>
			<p>
				Price: <strong>${props.price}</strong>
			</p>
		</div>
	);
};

export default Order;
