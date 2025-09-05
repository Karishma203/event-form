import React, { useState } from "react";
import "./eventform.css";

const EventForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [event, setEvent] = useState("React Workshop");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email) {
      alert("Please fill all fields!");
      return;
    }
    setSuccess(true);
    setName("");
    setEmail("");
    setEvent("React Workshop");
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <div className="form-container">
      <h2>🎉 Event Registration</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <select value={event} onChange={(e) => setEvent(e.target.value)}>
          <option>React Workshop</option>
          <option>Node.js Bootcamp</option>
          <option>AI Seminar</option>
        </select>
        <button type="submit">Register</button>
      </form>
      {success && <div className="success-message">🎉 Registration Successful!</div>}
    </div>
  );
};

export default EventForm;
