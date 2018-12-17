import React from 'react';
import { Link } from 'react-router-dom';
//this component has no state, just a functional component
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import {connect} from 'react-redux'
const Navbar=(props)=>{

	const { auth } = props;
  // console.log(auth);
    const links = auth.uid ? <SignedInLinks /> : <SignedOutLinks />;

	return (

		<nav className="nav.nav-wrapper,gret,darken-3">
			<div className="container">
			<Link to='/' className="brand-logo"> Ping's Planner </Link>
			{links}
			</div>
		</nav>

		)

}

const mapStateToProps=(state)=>{
  console.log(state)
  return{
  	auth: state.firebase.auth

  }
}

export default connect(mapStateToProps)(Navbar)