
import authReducer from './authReducer'
import projectReducer from './projectReducer'
import {combineReducers} from 'redux'
import { firestoreReducer } from 'redux-firestore';//premade reducer,syn firestore data with store. 
import {firebaseReducer} from 'react-redux-firebase';



const rootReducer=combineReducers({
	auth: authReducer,
	project: projectReducer,
	firestore: firestoreReducer, //sync our firestore to the state with firestoereducer
	firebase: firebaseReducer //will sync our auth status from firebase  with our redux app in the state and 
});

export default rootReducer

