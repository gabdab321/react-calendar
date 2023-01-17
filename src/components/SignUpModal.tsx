import React, {useState} from 'react';
import {Alert, Input, Modal} from "antd";
import {checkPassword, checkUsername} from "../utils/checkUserData";
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {setAuth} from "../redux/slices/authSlice";
import {setIsSignModalOpen} from "../redux/slices/modalsSlice";

const SignUpModal = () => {
    const dispatch = useAppDispatch()
    const isSignModalOpen = useAppSelector(state => state.modals.isSignModalOpen)

    const [isError, setIsError] = useState(false)
    const [errorText, setErrorText] = useState("")
    const [userData, setUserData] = useState({username: "", password: ""})

    function signUp() {
        localStorage.setItem("username", userData.username)
        localStorage.setItem("password", userData.password)
        dispatch(setAuth(true))
    }

    function handleUsername(e: React.ChangeEvent<HTMLInputElement>) {
        setUserData({...userData, username: e.target.value})
    }

    function handlePassword(e: React.ChangeEvent<HTMLInputElement>) {
        setUserData({...userData, password: e.target.value})
    }

    const handleOk = () => {
        if(checkUsername(userData.username) && checkPassword(userData.password)) {
            signUp()
            dispatch(setIsSignModalOpen(false))
            return
        }

        if(!checkUsername(userData.username)) {
            setErrorText("Your username must be longer than 3 characters and shorter than 20 characters")
            setIsError(true)
            return;
        }

        if(!checkPassword(userData.password)) {
            setErrorText("Your password must be 6 characters or longer")
            setIsError(true)
            return;
        }
    };

    const handleCancel = () => {
        dispatch(setIsSignModalOpen(false));
    };

    return (
        <>
            <Modal title="Sign Up" open={isSignModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <Input onChange={handleUsername} value={userData.username} placeholder="Your new username" />
                <Input onChange={handlePassword} value={userData.password} placeholder="Your new password" style={{marginTop:"10px"}}/>
                {isError &&
                    <Alert
                        style={{marginTop: "15px"}}
                        description={errorText}
                        type="error"
                        showIcon
                    />
                }
            </Modal>
        </>
    );
};

export default SignUpModal;