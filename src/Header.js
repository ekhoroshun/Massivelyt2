import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
	constructor(props) {
		super(props);
		this.state = { bag_amount: 0 };
	}

	render() {
		return [
			<div key="authentication" className="authentication">
				<Link className="link" to="/">
					Sign Up
				</Link>
				<Link className="link" to="/">
					Login
				</Link>
			</div>,
			<div key="header" className="row header justify-content-between">
				<div className="d-flex align-items-center left-side">
					<h3>THE HORSE</h3>

					<ul className="list-inline list-unstyled">
						<Link to="/" className="link">
							<li className="list-inline-item">Time Tellers</li>
						</Link>
						<Link to="/" className="link">
							<li className="list-inline-item">Leather Goods</li>
						</Link>
						<Link to="/" className="link">
							<li className="list-inline-item">Lifestyle </li>
						</Link>
					</ul>
				</div>

				<div className="d-flex align-items-center right-side">
					<ul className="list-inline list-unstyled">
						<Link to="/" className="link">
							<li className="list-inline-item">Lookbook</li>
						</Link>
						<Link to="/" className="link">
							<li className="list-inline-item">Our story</li>
						</Link>
						<Link to="/" className="link">
							<li className="list-inline-item">
								Bag ({this.state.bag_amount})
							</li>
						</Link>
					</ul>
				</div>
			</div>
		];
	}
}

export default Header;
