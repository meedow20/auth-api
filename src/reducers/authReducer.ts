import {createContext} from 'react';
import {SIGN_IN, SIGN_OUT} from "./constants/authReducerConstants";
import {AuthState} from "../types/AuthState";

export const AuthContext = createContext({});

export const initialState: AuthState = {
    isLoading: false,
    isSignOut: true,
    userToken: null
}

export const authReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SIGN_IN:
            return {
                ...state,
                isSignOut: false,
                isLoading: true,
                userToken: action.accessToken,
            };
        case SIGN_OUT:
            return {
                ...state,
                isSignOut: true,
                userToken: null,
            };
        default:
            return state
    }
}

export const init = (state: AuthState) => {
    return state;
}