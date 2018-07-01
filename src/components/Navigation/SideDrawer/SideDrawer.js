import React from "react";

import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import Backdrop from "../../UI/Backdrop/Backdrop";

import "./SideDrawer.css";

const SideDrawer = props => {
	return (
		<React.Fragment>
			<Backdrop show={props.open} clicked={props.closed} />
			<div className={`side-drawer ${props.open ? "open" : "close"}`}>
				<Logo />
				<NavigationItems />
			</div>
		</React.Fragment>
	);
};

export default SideDrawer;
