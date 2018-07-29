import React from "react";
import { NavLink } from "react-router-dom";

import "./NavigationItems.css";

const NavigationItems = props => {
	return (
		<nav>
			<ul className="navigation-items">
				<li>
					<NavLink exact to="/" activeClassName="active">
						Burger Builder
					</NavLink>
				</li>
				<li>
					<NavLink exact to="/orders" activeClassName="active">
						Orders
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default NavigationItems;
