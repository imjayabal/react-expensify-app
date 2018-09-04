// Higher Order Component (HOC) - A component (HOC) that renders another component

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: <strong>{ props.info }</strong></p>
    </div>
)

const WithAdminWarning = (WrapperComponent) => {
    return (props) => (
        <div>
            { props.isAdmin && <p>This inforation is confidential, Don't share!</p> }
            <WrapperComponent { ...props }/>
        </div>
    )
}

const requireAuthentication = (WrapperComponent) => {
    return (props) => (
        <div>
            { 
                props.isAuthenticated ? 
                <WrapperComponent { ...props }/> : <p>Please login to view the info!</p>
            }
            
        </div>
    )
}

const AdminInfo = WithAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={false} info='These are the info' />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info='These are the info' />, document.getElementById('app'));
