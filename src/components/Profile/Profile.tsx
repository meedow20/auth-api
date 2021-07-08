import React, {useState, useEffect} from 'react';
import {AuthContext} from "../../reducers/authReducer";
import axios from "axios";
import {profileApi, profileHeadersConfig} from "../../api/api";
import {Loader} from "../Loader/Loader";
import './styles/Profile.css';

export const Profile = () => {
    const {signOut}: any = React.useContext(AuthContext);

    const [initialized, setInitialized] = useState(false);

    useEffect(() => {
        (async () => {
            axios.get(profileApi, profileHeadersConfig(localStorage.getItem('token')))
                .then(res => {
                    localStorage.setItem('profileName', res.data.data.name);
                    setInitialized(true);
                })
                .catch((err) => alert(err))
        })();
    }, [])

    if (!initialized) {
        return (
            <Loader/>
        )
    }

    return (
        <div className="profileContainer">
            <div className="usernameContainer">
                Username: {localStorage.getItem('profileName')}
            </div>
            <button className="btnLogout" onClick={signOut}>
                Logout
            </button>
        </div>
    );
}
