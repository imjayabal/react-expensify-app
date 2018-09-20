import React from 'react';
import { connect } from 'react-redux';
import { startGmailLogin, startFacebookLogin } from '../actions/auth';

export const LoginPage = ({ startGmailLogin, startFacebookLogin }) =>(
    <div className="box-layout">
        <div className="box-layout__box">
            <h1 className="box-layout__title">Wento</h1>
            <p>It's time to get your expenses under control</p>
            <div className="box-layout__actions">
                <button className="button button--google" onClick={startGmailLogin}>Login with Google</button>
                <p className="or">or</p>
                <button className="button button--facebook" onClick={startFacebookLogin}>Login with Facebook</button>
            </div>
        </div>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startGmailLogin: () => dispatch(startGmailLogin()),
    startFacebookLogin: () => dispatch(startFacebookLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);



