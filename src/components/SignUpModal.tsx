import React, {useState} from 'react';
import {Input, Modal} from "antd";

interface SignUpModalProps {
    isModalOpen: boolean,
    setIsModalOpen: any
}

const SignUpModal = ({isModalOpen, setIsModalOpen}: SignUpModalProps) => {
    const [userData, setUserData] = useState({username: "", password: ""})

    function signUp() {
        localStorage.setItem("username", userData.username)
        localStorage.setItem("password", userData.password)
        localStorage.setItem("isLogged", "true")
    }

    function handleUsername(e: React.ChangeEvent<HTMLInputElement>) {
        setUserData({...userData, username: e.target.value})
    }

    function handlePassword(e: React.ChangeEvent<HTMLInputElement>) {
        setUserData({...userData, password: e.target.value})
    }

    const handleOk = () => {
        signUp()
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <Modal title="Sign Up" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <Input onChange={handleUsername} value={userData.username} placeholder="Your new username" />
                <Input onChange={handlePassword} value={userData.password} placeholder="Your new password" style={{marginTop:"10px"}}/>
            </Modal>
        </>
    );
};

export default SignUpModal;