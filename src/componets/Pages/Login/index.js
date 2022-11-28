import React, { useEffect } from "react";
import LoginForm from "../../Common/LoginForm";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../../store/slice/user-slice";
import login from "../../../store/slice/action/login";

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const user = useSelector(selectUser);

    useEffect(() => {
        if (user) {
            navigate(searchParams.get("redirectTo") ?? "/");
        }
    }, [navigate, searchParams, user]);

    return (
        <LoginForm
            onLogin={() => {
                dispatch(login());
            }}
        />
    );
};

export default Login;
