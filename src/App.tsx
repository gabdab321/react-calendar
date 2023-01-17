import React from 'react';
import AppRouter from "./components/AppRouter";
import "antd/dist/antd.css";
import "./styles/App.scss"

function App() {
    if(localStorage.getItem("dates") === null) {
        localStorage.setItem("dates", JSON.stringify({}))
    }

    return (
        <div className="App">
            <AppRouter />
        </div>
    );
}

export default App;
