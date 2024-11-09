import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import DashboardComponent from "./components/DashboardComponent";
import SpendingComponent from "./components/SpendingComponent";
import './App.css';

function App() {
    const [message, setMessage] = useState("");
    const [page, setPage] = useState("Dashboard"); // New state to track current page

    useEffect(() => {
        fetch("/api/message")
            .then((response) => response.json())
            .then((data) => setMessage(data.message))
            .catch((error) => console.error("Error fetching message:", error));
    }, []);

    return (
        <div className="App">
            <Header />
            <div className="dashboard-layout">
                <Sidebar setPage={setPage} /> {/* Pass setPage to Sidebar */}
                <main className="main-content">
                    {page === "Dashboard" && <DashboardComponent />}
                    {page === "Spending" && <SpendingComponent />}
                </main>
            </div>
        </div>
    );
}

export default App;
