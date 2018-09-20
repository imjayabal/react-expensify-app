import React from 'react';
import { firebase } from '../firebase/firebase';

class GetUserDetails extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        const user = firebase.auth().currentUser;
        if (user != null) {
            const name = user.displayName;
            const email = user.email;
            const photoUrl = user.photoURL;
            return(
                <div className="user-profile">
                    <img className="user-profile__image" src={photoUrl} />
                    <div className="user-profile__details">
                        <p className="name">{name}</p>
                        <p className="email">{email}</p>
                    </div>
                </div>
            )
        }
        
    }


}

export default GetUserDetails;
