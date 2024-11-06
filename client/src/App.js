import React, { useEffect, useState } from "react";
import CategoryPieChart from "./components/CategoryPieChart";
import TransactionList from "./components/TransactionList";

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
        <CategoryPieChart />
          <TransactionList />
      </div>
  );
}

export default App;
