


export const createProject=(project)=>{
	return(dispatch, getState, {getFirestore})=>{ //dispatch is a method. dispatch an action to reducer
		//make async call to database

		const firestore = getFirestore();
    const profile=getState().firebase.profile;
    const authorId=getState().firebase.auth.uid;
		 
		firestore.collection('projects').add({
      ...project,
      authorFirstName: profile.firstName,
      authorLastName: profile.lastName,
      authorId: authorId,
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'CREATE_PROJECT_SUCCESS' });
    }).catch(err => {
      dispatch({ type: 'CREATE_PROJECT_ERROR' }, err);
    });
  }
};

