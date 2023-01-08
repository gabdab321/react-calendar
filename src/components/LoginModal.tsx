import React, {useState} from 'react';
import {Button, Input, Modal} from "antd";

interface LoginModalProps {
    isModalOpen: boolean,
    setIsModalOpen: any
}

const LoginModal = ({isModalOpen, setIsModalOpen}: LoginModalProps) => {
    const [userData, setUserData] = useState({username: "", password: ""})

    function login() {
        const username = localStorage.getItem("username")
        const password = localStorage.getItem("password")

        if(username === userData.username && password === userData.password) {
            localStorage.setItem("isLogged", "true")
        }else {
            localStorage.setItem("isLogged", "false")
        }

        return false
    }

    function handleUsername(e: React.ChangeEvent<HTMLInputElement>) {
        setUserData({...userData, username: e.target.value})
    }

    function handlePassword(e: React.ChangeEvent<HTMLInputElement>) {
        setUserData({...userData, password: e.target.value})
    }

    const handleOk = () => {
        login()
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <Modal title="Log In" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <Input value={userData.username} onChange={handleUsername} placeholder="Username" />
                <Input value={userData.password} onChange={handlePassword} placeholder="Password" style={{marginTop:"10px"}}/>
            </Modal>
        </>
    );
};

export default LoginModal;