import React from 'react';
import {Button, Layout} from "antd";
import classes from "./Navbar.module.scss"

interface NavbarProps {
    showLoginModal: any,
    showSignModal: any
}

const Navbar = ({showLoginModal, showSignModal}: NavbarProps) => {
    return (
        <Layout.Header style={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
            <p className={classes.nick}>GabDab321`s</p>
            <div>
                <Button size="large" style={{marginRight: "15px"}} onClick={showSignModal}>Sign Up</Button>
                <Button size="large" onClick={showLoginModal}>Log In</Button>
            </div>
        </Layout.Header>
    );
};

export default Navbar;