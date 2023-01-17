import React, {useState} from 'react';
import {Alert, Input, Modal} from "antd";
import {setAuth} from "../redux/slices/authSlice";
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {setIsLoginModalOpen} from "../redux/slices/modalsSlice";

const LoginModal = () => {
    const dispatch = useAppDispatch()
    const isLoginModalOpen = useAppSelector(state => state.modals.isLoginModalOpen)

    const [isError, setIsError] = useState(false)
    const [userData, setUserData] = useState({username: "", password: ""})

    function handleUsername(e: React.ChangeEvent<HTMLInputElement>) {
        setUserData({...userData, username: e.target.value})
    }

    function handlePassword(e: React.ChangeEvent<HTMLInputElement>) {
        setUserData({...userData, password: e.target.value})
    }

    const handleOk = () => {
        const username = localStorage.getItem("username")
        const password = localStorage.getItem("password")

        if(username === userData.username && password === userData.password) {
            dispatch(setAuth(true))
            dispatch(setIsLoginModalOpen(false))
            return true
        }else {
            dispatch(setAuth(false))
            setIsError(true)
            return false
        }
    };

    const handleCancel = () => {
        dispatch(setIsLoginModalOpen(false))
    };

    return (
        <>
            <Modal title="Log In" open={isLoginModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <Input value={userData.username} onChange={handleUsername} placeholder="Username" />
                <Input value={userData.password} onChange={handlePassword} placeholder="Password" style={{marginTop:"10px"}}/>
                {isError &&
                    <Alert
                        style={{marginTop: "15px"}}
                        description="Data you entered is invalid"
                        type="error"
                        showIcon
                    />
                }
            </Modal>
        </>
    );
};

export default LoginModal;