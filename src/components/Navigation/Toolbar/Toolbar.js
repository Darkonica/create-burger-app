import React from "react";

import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import MobileMenu from "../MobileMenu/MobileMenu";

import "./Toolbar.css";

const Toolbar = props => {
	return (
		<header className="toolbar">
			<MobileMenu clicked={props.opened} />
			<Logo />
			<NavigationItems />
		</header>
	);
};

export default Toolbar;
