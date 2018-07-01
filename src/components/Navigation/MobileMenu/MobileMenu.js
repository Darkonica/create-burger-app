import React from "react";

import "./MobileMenu.css";

const MobileMenu = props => {
	return (
		<div className="drawer-toggle" onClick={props.clicked}>
			<div />
			<div />
			<div />
		</div>
	);
};

export default MobileMenu;
