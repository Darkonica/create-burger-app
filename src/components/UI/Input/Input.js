import React from "react";

import "./Input.css";

const Input = props => {
	let inputElement = null;
	let inputValidErrorClass = "";

	if (props.invalid && props.shouldValidate && props.touched) {
		inputValidErrorClass = "error";
	}

	switch (props.elementType) {
		case "input":
			inputElement = (
				<input
					className={inputValidErrorClass}
					{...props.elementConfig}
					value={props.value}
					onChange={props.changed}
				/>
			);
			break;
		case "textarea":
			inputElement = (
				<textarea
					className={inputValidErrorClass}
					{...props.elementConfig}
					value={props.value}
					onChange={props.changed}
				/>
			);
			break;
		case "select":
			inputElement = (
				<select
					className={inputValidErrorClass}
					value={props.value}
					onChange={props.changed}
				>
					{props.elementConfig.options.map(option => {
						return (
							<option key={option.value} value={option.value}>
								{option.displayValue}
							</option>
						);
					})}
				</select>
			);
			break;
		default:
			inputElement = (
				<input
					{...props.elementConfig}
					value={props.value}
					onChange={props.changed}
				/>
			);
	}

	return (
		<div className="input">
			<label>{props.label}</label>
			{inputElement}
		</div>
	);
};

export default Input;
