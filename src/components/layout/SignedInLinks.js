import React from 'react';
import { NavLink } from 'react-router-dom';
//this component has no state, just a functional component
import { signOut } from '../../store/actions/authActions'
import {connect} from 'react-redux'
const SignedInLinks=(props)=>{

	return (
     <div>
		<ul className="right">
		 <li> <NavLink to='/create'>New Project </NavLink></li>
		  <li><a onClick={props.signOut}>Log Out</a></li>
         <li> <NavLink to='/' className='btn btn-floating pink lighten-1'> LL </NavLink></li>
		</ul> 
	</div>
	)

}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)