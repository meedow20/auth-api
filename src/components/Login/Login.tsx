import * as React from 'react';
import {Formik, Field, Form, FormikHelpers} from 'formik';
import {SignIn} from "../../types/SignIn";
import {AuthContext} from "../../reducers/authReducer";
import './styles/Login.css';

export const Login: React.FC = () => {
    const {signIn}: any = React.useContext(AuthContext);

    return (
        <div className="loginContainer">
            <h1>Sign in</h1>
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                }}
                onSubmit={(
                    values: SignIn,
                    {setSubmitting}: FormikHelpers<SignIn>
                ) => {
                    signIn(values);
                    setSubmitting(false);
                }}
            >
                <Form>
                    <div className="inputContainer">
                        <Field
                            id="email"
                            name="email"
                            placeholder="user@ozitag.com"
                            type="email"
                            className="emailInput"
                        />
                    </div>
                    <div className="inputContainer">
                        <Field
                            id="password"
                            name="password"
                            placeholder="user"
                            type="password"
                            className="passwordInput"
                        />
                    </div>
                    <button className="btnSubmit" type="submit">Submit</button>
                </Form>
            </Formik>
        </div>
    );
};
