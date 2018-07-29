import React from "react";

import "./Button.css";

const Button = props => (
	<button
		className={`button ${props.btnType}`}
		disabled={props.disabled}
		onClick={props.clicked}
	>
		{props.children}
	</button>
);

export default Button;
