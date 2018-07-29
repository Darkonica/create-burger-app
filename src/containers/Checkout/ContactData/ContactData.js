import React, { Component } from "react";

import Button from "../../../components/UI/Button/Button";
import Spinner from "../../../components/UI/Spinner/Spinner";
import Input from "../../../components/UI/Input/Input";
import axios from "../../../axios-orders";

import "./ContactData.css";

export class ContactData extends Component {
	state = {
		orderForm: {
			name: {
				elementType: "input",
				elementConfig: {
					type: "text",
					placeholder: "Name"
				},
				value: "",
				validation: {
					required: true,
					minLength: 3
				},
				valid: false,
				touched: false
			},
			street: {
				elementType: "input",
				elementConfig: {
					type: "text",
					placeholder: "Street"
				},
				value: "",
				validation: {
					required: true
				},
				valid: false,
				touched: false
			},
			zipCode: {
				elementType: "input",
				elementConfig: {
					type: "text",
					placeholder: "Zip code"
				},
				value: "",
				validation: {
					required: true,
					minLength: 5,
					maxLength: 5
				},
				valid: false,
				touched: false
			},
			country: {
				elementType: "input",
				elementConfig: {
					type: "text",
					placeholder: "Country"
				},
				value: "",
				validation: {
					required: true
				},
				valid: false,
				touched: false
			},
			email: {
				elementType: "input",
				elementConfig: {
					type: "text",
					placeholder: "Email"
				},
				value: "",
				validation: {
					required: true
				},
				valid: false,
				touched: false
			},
			delivery: {
				elementType: "select",
				elementConfig: {
					options: [
						{
							value: "fastest",
							displayValue: "Fastest"
						},
						{
							value: "cheapest",
							displayValue: "Cheapest"
						}
					]
				},
				value: "",
				valid: true
			}
		},
		formIsValid: false,
		loading: false
	};

	orderHandler = event => {
		event.preventDefault();

		this.setState({
			loading: true
		});
		const formData = {};
		for (let formElementIdentifier in this.state.orderForm) {
			formData[formElementIdentifier] = this.state.orderForm[
				formElementIdentifier
			].value;
		}

		const order = {
			ingredients: this.props.ingredients,
			price: Number(this.props.price).toFixed(2),
			orderData: formData
		};
		axios
			.post("/orders.json", order)
			.then(res => {
				this.setState({ loading: false });
				this.props.history.push("/");
			})
			.catch(err => {
				console.log(err);
				this.setState({ loading: false });
			});
	};

	checkValidity(value, rules) {
		let isValid = true;

		if (!rules) return true;

		if (rules.required) {
			isValid = value.trim() !== "";
			if (!isValid) return isValid;
		}
		if (rules.minLength) {
			isValid = value.length >= rules.minLength;
			if (!isValid) return isValid;
		}
		if (rules.maxLength) {
			isValid = value.length <= rules.maxLength;
			if (!isValid) return isValid;
		}

		return isValid;
	}

	inputChangedHandler = (event, inputIdentifier) => {
		const updatedOrderForm = {
			...this.state.orderForm
		};
		const updatedFormElement = {
			...updatedOrderForm[inputIdentifier]
		};
		updatedFormElement.value = event.target.value;
		updatedFormElement.valid = this.checkValidity(
			updatedFormElement.value,
			updatedFormElement.validation
		);
		updatedFormElement.touched = true;
		updatedOrderForm[inputIdentifier] = updatedFormElement;

		let formIsValid = false;
		for (let inputIdentifier in updatedOrderForm) {
			formIsValid = updatedOrderForm[inputIdentifier].valid;
			if (!formIsValid) break;
		}
		console.log(formIsValid);

		this.setState({
			orderForm: updatedOrderForm,
			formIsValid
		});
	};

	render() {
		const formElementsArray = [];
		for (let key in this.state.orderForm) {
			formElementsArray.push({
				id: key,
				config: this.state.orderForm[key]
			});
		}

		let form = (
			<form onSubmit={this.orderHandler}>
				{formElementsArray.map(formElement => {
					return (
						<Input
							key={formElement.id}
							elementType={formElement.config.elementType}
							elementConfig={formElement.config.elementConfig}
							value={formElement.config.value}
							invalid={!formElement.config.valid}
							shouldValidate={formElement.config.validation}
							touched={formElement.config.touched}
							changed={event => this.inputChangedHandler(event, formElement.id)}
						/>
					);
				})}
				<Button btnType="success" disabled={!this.state.formIsValid}>
					Order
				</Button>
			</form>
		);
		if (this.state.loading) {
			form = <Spinner />;
		}
		return (
			<div className="contact-data">
				<h4>Enter your contact data</h4>
				{form}
			</div>
		);
	}
}

export default ContactData;
