import React from "react";

import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
import "./Burger.css";

const Burger = props => {
	let ingredients = Object.keys(props.ingredients)
		.map(ingKey => {
			return [...Array(props.ingredients[ingKey])].map((_, i) => {
				return <BurgerIngredient key={ingKey + i} type={ingKey} />;
			});
		})
		.reduce((arr, el) => {
			return arr.concat(el);
		}, []);

	if (ingredients.length === 0) {
		ingredients = <p>Please start adding ingredients</p>;
	}

	return (
		<div className="burger">
			<BurgerIngredient type="bread-top" />

			{ingredients}

			<BurgerIngredient type="bread-bottom" />
		</div>
	);
};

export default Burger;
