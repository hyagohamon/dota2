import React from "react";
import ReactDOM from "react-dom/client"
import '/src/style.css'
import DotaApp from "./DotaApp.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <DotaApp/>
    </React.StrictMode>
);