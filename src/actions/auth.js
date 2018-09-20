import { firebase, googleAuthProvider, facebookAuthProvider } from '../firebase/firebase';


export const login = (uid) => ({
    type: 'LOGIN',
    uid
});

export const startGmailLogin = () => {
    return () => {
        return firebase.auth().signInWithPopup(googleAuthProvider)
        // .then((result) => {
        //     const userData = result.user;
        //     const userName = userData.displayName;
        //     const userEmail = userData.email;
        //     const userImage = userData.photoURL;
        //     console.log(userName, userEmail,userImage);
        //     <p>{userName}</p>
        // });
    }
};
export const startFacebookLogin = () => {
    return () => {
        return firebase.auth().signInWithPopup(facebookAuthProvider);
    }
};

export const logout = () => ({
    type: 'LOGOUT'
});

export const startLogout = () => {
    return () => {
        return firebase.auth().signOut();
    }
};

