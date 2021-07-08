import React, {useMemo, useReducer} from 'react';
import {SignIn} from "./types/SignIn";
import axios from "axios";
import {ozitagAuthApi, querySignInBody} from "./api/api";
import {authReducer, init, initialState} from "./reducers/authReducer";
import {SIGN_IN, SIGN_OUT} from "./reducers/constants/authReducerConstants";
import {AuthContext} from "./reducers/authReducer";
import {Login} from "./components/Login/Login";
import {Profile} from "./components/Profile/Profile";

export default function App() {
    const [state, dispatch] = useReducer(authReducer, initialState, init);

    const authContext = useMemo(() => ({
        signIn: async (values: SignIn) => {
            axios.post(ozitagAuthApi, querySignInBody(values))
                .then(async res => {
                    localStorage.setItem('token', res.data.data.accessToken);
                    dispatch({
                        type: SIGN_IN,
                        accessToken: res.data.data.accessToken,
                    })
                })
                .catch(() => alert('Invalid email or password'))
        },
        signOut: async () => {
            localStorage.removeItem('token');
            localStorage.removeItem('profileName');
            dispatch({type: SIGN_OUT})
        }
    }), [])

    return (
        <AuthContext.Provider value={authContext}>
            {localStorage.getItem('token') ?
                <Profile/> :
                <Login/>
            }
        </AuthContext.Provider>
    );
}