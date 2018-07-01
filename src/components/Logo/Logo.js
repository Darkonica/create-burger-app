import React from "react";

import burgerLogo from "../../assets/images/logo.png";

import "./Logo.css";

const Logo = props => (
	<div className="logo">
		<img src={burgerLogo} alt="noneBurger" />
	</div>
);

export default Logo;
