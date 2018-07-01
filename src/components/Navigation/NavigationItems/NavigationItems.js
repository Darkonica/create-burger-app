import React from "react";

import "./NavigationItems.css";

const NavigationItems = props => {
	return (
		<nav>
			<ul className="navigation-items">
				<li>
					<a href="/" className="active">
						Burger Builder
					</a>
				</li>
				<li>
					<a href="/">Checkout</a>
				</li>
			</ul>
		</nav>
	);
};

export default NavigationItems;
