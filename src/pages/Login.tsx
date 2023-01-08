import React, {useState} from 'react';
import Navbar from "../components/Navbar/Navbar";
import classes from "./styles/Login.module.scss"
import LoginModal from "../components/LoginModal";
import SignUpModal from "../components/SignUpModal";

const Login = () => {
    const [isSignModalOpen, setIsSignModalOpen] = useState(false);
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

    function showLoginModal() {
        setIsLoginModalOpen(true)
    }

    function showSignModal() {
        setIsSignModalOpen(true)
    }

    return (
        <div className={classes.main}>
            <SignUpModal isModalOpen={isSignModalOpen} setIsModalOpen={setIsSignModalOpen}/>
            <LoginModal isModalOpen={isLoginModalOpen} setIsModalOpen={setIsLoginModalOpen}/>
            <Navbar showLoginModal={showLoginModal} showSignModal={showSignModal}/>
            <div className={classes.text}>Please, <a onClick={showSignModal}>sign up</a> or <a onClick={showLoginModal}>log in</a> to continue</div>
        </div>
    );
};

export default Login;