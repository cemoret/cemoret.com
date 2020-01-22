import React, { Component, Fragment } from "react";
import { NavLink, Link } from "react-router-dom";
import MyContext from "../MyContext";

// Components

class Menu extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {}

	renderMenuLeft(context) {
		if (context.state.changeColor === false) {
			return (
				<img
					onClick={() => context.onChangeColor()}
					className="isotype-face"
					src="https://firebasestorage.googleapis.com/v0/b/cemoretdotcom.appspot.com/o/icons%2Fhappyface.svg?alt=media&token=00a478d1-2b3a-48e9-81cf-f54f932b8c5d"
					alt="happyface icon"
				/>
			);
		} else {
			return (
				<img
					onClick={() => context.onChangeColor()}
					className="isotype-face"
					src="https://firebasestorage.googleapis.com/v0/b/cemoretdotcom.appspot.com/o/icons%2Fface.svg?alt=media&token=06620e07-5dcf-441e-b06a-887782764889"
					alt="face icon"
				/>
			);
		}
	}

	renderMenuCenter(work, worknumber, back, foward, link) {
		if (work === "" || work == null) {
			return <span></span>;
		}
		if (work === "list") {
			return (
				<Link to={link}>
					<div className="text-center px-2">
						<img
							className="isotype"
							src="https://firebasestorage.googleapis.com/v0/b/cemoretdotcom.appspot.com/o/icons%2Fworklist.svg?alt=media&token=3aadb39c-5bfe-4a86-84e2-574d2f7175c0"
							alt="face icon"
						/>
					</div>
				</Link>
			);
		}
		if (work === "blocks") {
			return (
				<Link to={link}>
					<div className="text-center px-2">
						<img
							className="isotype"
							src="https://firebasestorage.googleapis.com/v0/b/cemoretdotcom.appspot.com/o/icons%2Fworkblocks.svg?alt=media&token=f289cdd9-d329-4668-946f-3332cc756182"
							alt="face icon"
						/>
					</div>
				</Link>
			);
		} else {
			return (
				<div className="text-center">
					<ul>
						<li className="inline-block">
							<Link to={back}>
								<h3 className="px-2">{`<`}</h3>
							</Link>
						</li>
						<li className="inline-block">
							{this.renderWorkTitle(work, worknumber)}
						</li>
						<li className="inline-block">
							<Link to={foward}>
								<h3 className="px-2">{`>`}</h3>
							</Link>
						</li>
					</ul>
				</div>
			);
		}
	}

	renderWorkTitle(work, worknumber) {
		return (
			<div>
				<h3 className="d-md-none">{worknumber}</h3>
				<h3 className="d-none d-md-block">{work + ` ` + worknumber}</h3>
			</div>
		);
	}

	renderMenuRight() {
		return (
			<div>
				<div className="d-none d-md-block">
					<div className="float-right px-2">
						<NavLink to={`/about`} activeClassName="current">
							<h3 className="menu-link">ABOUT</h3>
						</NavLink>
					</div>
					<div className="float-right px-2">
						<NavLink to={`/work`} activeClassName="current">
							<h3 className="menu-link">WORK</h3>
						</NavLink>
					</div>
					<div className="float-right pr-2">
						<NavLink exact to={`/`} activeClassName="current">
							<h3 className="menu-link">HOME</h3>
						</NavLink>
					</div>
				</div>

				<div className="row d-md-none menu-mobile" id="menublur">
					<div className="col-4 px-2 text-left">
						<NavLink exact to={`/`} activeClassName="current">
							<h3 className="menu-link">HOME</h3>
						</NavLink>
					</div>
					<div className="col-4 px-2 text-center">
						<NavLink to={`/work`} activeClassName="current">
							<h3 className="menu-link">WORK</h3>
						</NavLink>
					</div>
					<div className="col-4 px-2 text-right">
						<NavLink to={`/about`} activeClassName="current">
							<h3 className="menu-link">ABOUT</h3>
						</NavLink>
					</div>
				</div>
			</div>
		);
	}

	render() {
		const { link, work, worknumber, back, foward } = this.props;

		return (
			<MyContext.Consumer>
				{context => (
					<Fragment>
						{console.log(context.state.changeColor)}
						<div className="">
							<header className="menu">
								<div className="row py-2">
									<div className="col-3 px-2">
										{this.renderMenuLeft(context)}
									</div>
									<div className="col-6 px-0">
										{this.renderMenuCenter(
											work,
											worknumber,
											back,
											foward,
											link
										)}
									</div>

									<div className="col-3 px-0">{this.renderMenuRight()}</div>
								</div>
							</header>
						</div>
					</Fragment>
				)}
			</MyContext.Consumer>
		);
	}
}

export default Menu;
