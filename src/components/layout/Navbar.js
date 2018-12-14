import React from 'react';
import { Link } from 'react-router-dom';
//this component has no state, just a functional component
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
const Navbar=()=>{

	return (

		<nav className="nav.nav-wrapper,gret,darken-3">
			<div className="container">
			<Link to='/' className="brand-logo"> Ping's Planner </Link>
			<SignedInLinks/>
			<SignedOutLinks/>
			</div>
		</nav>

		)

}

export default Navbar