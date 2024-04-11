import { useState } from "react";
import "./App.css";
import TopBar from "./components/TopBar/TopBar.jsx";
import AppGrid from "./components/AppGrid/AppGrid.jsx";

function App() {
    return (
        <>
            <TopBar />
            <AppGrid />
        </>
    );
}

export default App;
