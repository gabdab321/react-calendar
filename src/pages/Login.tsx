import React from 'react';
import classes from "./styles/Login.module.scss"
import LoginModal from "../components/LoginModal";
import SignUpModal from "../components/SignUpModal";
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {showSignModal, showLoginModal} from "../redux/slices/modalsSlice";

const Login = () => {
    const dispatch = useAppDispatch()

    return (
        <div className={classes.main}>
            <SignUpModal/>
            <LoginModal/>
            <div className={classes.text}>Please, <a onClick={() => dispatch(showSignModal())}>sign up</a> or <a onClick={() => dispatch(showLoginModal())}>log in</a> to continue</div>
        </div>
    );
};

export default Login;