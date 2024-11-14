import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import DashboardComponent from "./components/DashboardComponent";
import SpendingComponent from "./components/SpendingComponent";
import './App.css';

function App() {
    const [page, setPage] = useState("Dashboard");

    return (
        <div className="App">
            <Header />
            <div className="dashboard-layout">
                <Sidebar setPage={setPage} /> {}
                <main className="main-content">
                    {page === "Dashboard" && <DashboardComponent />}
                    {page === "Spending" && <SpendingComponent />}
                </main>
            </div>
        </div>
    );
}

export default App;
