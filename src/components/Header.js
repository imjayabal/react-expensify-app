import React from 'react';
import {Link } from 'react-router-dom';
import { startLogout } from '../actions/auth';
import { connect } from 'react-redux';
import UserProfile from './UserProfile';

export const Header = ({ startLogout }) => (
    <header className="header">
        <div className="content-container">
           <div className="header__content">
                <Link className="header__title" to="/dashboard">
                    <h1>wentoC</h1>
                </Link>
                    <UserProfile />
                    <button className="button button--link" onClick={startLogout}>Logout</button>
           </div>
        </div>
    </header>
);

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);