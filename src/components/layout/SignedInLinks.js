import React from 'react';
import { NavLink } from 'react-router-dom';
//this component has no state, just a functional component

const SignedInLinks=()=>{

	return (
     <div>
		<ul className="right">
		 <li> <NavLink to='/createproject'>New Project </NavLink></li>
		 <li> <NavLink to='/'> Log Out</NavLink></li>
         <li> <NavLink to='/' className='btn btn-floating pink lighten-1'> LL </NavLink></li>
		</ul> 
	</div>
	)

}

export default SignedInLinks