import React, { Component } from "react";
import Header from "./Header";

class Bootstrap extends Component {
	render() {
		return (
			<div className="container-fluid h-100">
				<div className="row content-wrapper h-100">
					<div className="col-12 content">
                    {/* static content */}
						<Header />
                    {/* dynamic content */}
						<div className="row body">
							<div className="col-12">{this.props.children}</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Bootstrap;
