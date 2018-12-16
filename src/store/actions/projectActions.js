


export const createProject=(project)=>{
	return(dispatch, getState, { getFirestore})=>{ //dispatch is a method. dispatch an action to reducer
		//make async call to database

		const firestore = getFirestore();
		//aync, promise 
		firestore.collection('projects').add({
      ...project,
      authorFirstName: 'Net',
      authorLastName: 'Ninja',
      authorId: 12345,
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'CREATE_PROJECT_SUCCESS' });
    }).catch(err => {
      dispatch({ type: 'CREATE_PROJECT_ERROR' }, err);
    });
  }
};

