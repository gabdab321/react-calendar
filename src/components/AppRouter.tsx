import React from 'react';
import {Routes, Route} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../router";
import {Navigate} from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import {useAppSelector} from "../hooks/redux";

const AppRouter = () => {
    if(localStorage.getItem("isLogged") === null) {
        localStorage.setItem("isLogged", "false")
    }

    const isLogged = useAppSelector((state) => state.auth.isLogged)

    return (
        <div>
            <Navbar />
            {
                isLogged
                    ?
                    <Routes>
                        {privateRoutes.map(route => <Route key={route.path} {...route}/>)}
                        <Route
                            path="*"
                            element={<Navigate to="/" replace />}
                        />
                    </Routes>
                    :
                    <Routes>
                        {publicRoutes.map(route => <Route key={route.path} {...route}/>)}
                        <Route
                            path="*"
                            element={<Navigate to="/login" replace />}
                        />
                    </Routes>
            }

        </div>
    );
};

export default AppRouter;