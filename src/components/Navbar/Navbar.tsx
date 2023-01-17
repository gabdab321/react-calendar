import React from 'react';
import {Button, Layout} from "antd";
import classes from "./Navbar.module.scss"
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {showLoginModal, showSignModal} from "../../redux/slices/modalsSlice";
import {setAuth} from "../../redux/slices/authSlice";

const Navbar = () => {
    const dispatch = useAppDispatch()

    const isLogged = useAppSelector(state => state.auth.isLogged)
    const username = localStorage.getItem("username")

    function logOut() {
        localStorage.setItem("isLogged", "false")
        dispatch(setAuth(false))
    }

    return (
        <Layout.Header className={classes.main}>
            <p className={classes.nick}>{isLogged ? username+"`s" : "Calendar"}</p>
            <div>
                {isLogged
                    ?
                    <Button size="large" onClick={logOut}>Log Out</Button>
                    :
                    <>
                        <Button size="large" style={{marginRight: "15px"}} onClick={() => dispatch(showSignModal())}>Sign Up</Button>
                        <Button size="large" onClick={() => dispatch(showLoginModal())}>Log In</Button>
                    </>
                }
            </div>
        </Layout.Header>
    );
};

export default Navbar;