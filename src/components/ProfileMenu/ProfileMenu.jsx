// ProfileMenu.js
import React from 'react';
import { auth } from '../auth/firebase';

function ProfileMenu({ user }) {
    const handleLogout = () => {
        auth.signOut()
            .then(() => {
                console.log('User signed out');
            })
            .catch((error) => {
                console.error('Error signing out: ', error);
            });
    };

    return (
        <div className="profile-menu">
            <button className="button" onClick={handleLogout}>Logout</button>
        </div>
    );
}

export default ProfileMenu;
