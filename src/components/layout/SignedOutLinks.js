import React from 'react';
import { NavLink } from 'react-router-dom';
//this component has no state, just a functional component

const SignedOutLinks=()=>{

	return (

		<ul className="right">
		 <li> <NavLink to='/'>Sign Up </NavLink></li>
		 <li> <NavLink to='/'> Log In</NavLink></li>
         
		</ul> 

	)

}

export default SignedOutLinks

