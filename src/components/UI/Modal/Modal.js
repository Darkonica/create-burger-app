import React, { Component } from "react";

import Backdrop from "../Backdrop/Backdrop";
import "./Modal.css";

export class Modal extends Component {
	shouldComponentUpdate(nextProps, nextState) {
		return (
			nextProps.show !== this.props.show ||
			nextProps.children !== this.props.children
		);
	}

	render() {
		return (
			<div>
				<Backdrop show={this.props.show} clicked={this.props.modalClosed} />
				<div className={`modal-window ${this.props.show ? "open" : ""}`}>
					{this.props.children}
				</div>
			</div>
		);
	}
}

export default Modal;
