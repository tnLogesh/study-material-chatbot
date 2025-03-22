import React, { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [regNumber, setRegNumber] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && regNumber) {
      setSubmitted(true);
      // API calls or navigation
      console.log("Name:", name, "Registration Number:", regNumber);
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Study Material Providing Chatbot</h1>
        {!submitted ? (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="regNumber">Registration Number:</label>
              <input
                type="text"
                id="regNumber"
                value={regNumber}
                onChange={(e) => setRegNumber(e.target.value)}
                placeholder="Enter your registration number"
                required
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        ) : (
          <div className="welcome-message">
            <h2>Welcome, {name}!</h2>
            <p>Your registration number is: {regNumber}</p>
            <p>How can I assist you with study materials today?</p>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
