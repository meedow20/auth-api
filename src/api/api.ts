import {SignIn} from "../types/SignIn";

export const ozitagAuthApi = 'https://tager.dev.ozitag.com/api/auth/user';

export const querySignInBody = (values: SignIn) => {
    return {
        "clientId": 1,
        "email": values.email,
        "password": values.password
    }
}

export const profileApi = 'https://tager.dev.ozitag.com/api/tager/user/profile';

export function profileHeadersConfig(token: string | null) {
    return {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    }
}