import React from 'react';
import {Routes, Route} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../router";

const AppRouter = () => {
    const auth = true

    return (
        <div>
            {
                auth
                    ?
                    <Routes>
                        {privateRoutes.map(route => <Route {...route}/>)}
                    </Routes>
                    :
                    <Routes>
                        {publicRoutes.map(route => <Route {...route}/>)}
                    </Routes>
            }

        </div>
    );
};

export default AppRouter;