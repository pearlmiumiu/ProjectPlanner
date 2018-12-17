import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, applyMiddleware, compose} from 'redux'
import rootReducer from './store/reducer/rootReducer'
//provider pass store into app, so the app can access to the store
import {Provider} from 'react-redux'
import thunk from 'redux-thunk' //middleware, need to apply to the store
import {reduxFirestore,getFirestore} from 'redux-firestore'
import {reactReduxFirebase, getFirebase} from 'react-redux-firebase'
import fbConfig from './config/fbConfig'


//applyMiddleware takes a list of middleware like thunk, and turn it into store enhanceer
//enhance store with extra functionality, -> return a function inside our action creator and interact with database

const store = createStore(rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
    reactReduxFirebase(fbConfig,{userProfile: 'users', useFirestoreForProfile: true, attachAuthIsReady: true}), // redux binding for firebase
    reduxFirestore(fbConfig) // redux bindings for firestore
  )
);


store.firebaseAuthIsReady.then(() => {
  ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
  serviceWorker.unregister();

}); //promise based, wait until firebase is ready

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
