import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import './App.css';

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("/api/message")
        .then((response) => response.json())
        .then((data) => setMessage(data.message))
        .catch((error) => console.error("Error fetching message:", error));
  }, []);

  return (
      <div className="App">
          <Header/>
          <div className="dashboard-layout">
              <Sidebar/>
              <MainContent/>
          </div>
      </div>
  );
}

export default App;
