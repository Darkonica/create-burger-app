import React, { Component } from "react";

import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

import "./Layout.css";

export class Layout extends Component {
	state = {
		showSideDrawer: false
	};

	sideDrawerClosedHandler = () => {
		this.setState({
			showSideDrawer: false
		});
	};

	sideDrawerOpenedHandler = () => {
		this.setState({
			showSideDrawer: true
		});
	};

	render() {
		return (
			<div>
				<Toolbar opened={this.sideDrawerOpenedHandler} />
				<SideDrawer
					open={this.state.showSideDrawer}
					closed={this.sideDrawerClosedHandler}
				/>
				<main className="content">{this.props.children}</main>
			</div>
		);
	}
}

export default Layout;
