import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Home extends Component {
	constructor(props) {
		super(props);

		this.state = { choosen_pic: "clock" };
		this.displayPicture = this.displayPicture.bind(this);
		this.choosePicture = this.choosePicture.bind(this);
    
    }

	componentDidMount() {}

	componentWillReceiveProps(nextProps) {}

	choosePicture(name) {
		this.setState({
			choosen_pic: name
		});
	}
	displayPicture() {
		{
			console.log(this.state.choosen_pic);
		}
		return <img src={"/" + this.state.choosen_pic + ".jpg"} />;
	}

	render() {
		return (
			<div className="d-flex justify-content-between">
				<div className="gallery">
					<img onClick={() => this.choosePicture("clock2")} src="/clock2.jpg" />
					<img onClick={() => this.choosePicture("clock")} src="/clock.jpg" />
					<img onClick={() => this.choosePicture("clock2")} src="/clock2.jpg" />
				</div>
				<div className="display-pic">{this.displayPicture()}</div>
				<div className="description">
					<h4 className="mb-3">Brushed gunmental olive</h4>
					<Link to="/" className="link review">
						6 Reviews
					</Link>
					<Link to="/" className="link review">
						{" "}
						Add Your Review
					</Link>
					<p className="mt-3">
						This watched is constructed with a sandblusted gunmetal stainless
						steel case,white face with minimalist silver indexing, and finished
						with an olive leather band. The Horse logo lettering on dial and at
						buckle closure.
					</p>

					<h5 className="my-3">$149.00</h5>

					<div className="d-flex justify-content-between details">
						<p>Details & Specifications</p>
						<button className="btn plus">+</button>
					</div>

					<button className="btn mt-5 add-to-cart">Add to cart</button>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		app: state.app
	};
}

export default connect(
	mapStateToProps,
	{}
)(Home);
