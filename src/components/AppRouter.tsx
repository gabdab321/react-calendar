import React from 'react';
import {Routes, Route} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../router";
import {Navigate} from "react-router-dom";

const AppRouter = () => {
    if(localStorage.getItem("isLogged") === undefined) {
        localStorage.setItem("isLogged", "false")
    }

    const auth = JSON.parse(localStorage.getItem("isLogged") as string)

    return (
        <div>
            {
                auth
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