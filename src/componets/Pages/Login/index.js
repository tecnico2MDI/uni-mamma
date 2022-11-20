import React from "react";
import LoginForm from "../../Common/LoginForm";

const Login = ({ onLogin }) => {
    return (
        <LoginForm
            onLogin={() => {
                onLogin(true);
            }}
        />
    );
};

export default Login;
