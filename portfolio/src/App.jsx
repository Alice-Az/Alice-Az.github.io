import { useState } from "react";
import "./App.css";
import TopBar from "./components/TopBar/TopBar.jsx";
import AppGrid from "./components/AppGrid/AppGrid.jsx";
import ContactView from "./views/ContactView/ContactView.jsx";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";

function App() {
    return (
        <>
            <TopBar />
            <Routes>
                <Route exact path="/" element={<AppGrid />} />
                <Route path="/contact" element={<ContactView />} />
            </Routes>
        </>
    );
}

export default App;
