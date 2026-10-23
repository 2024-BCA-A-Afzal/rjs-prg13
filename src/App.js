import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim()) {
      setMessage("Please enter your name");
      return;
    }

    if (!email.trim()) {
      setMessage("Please enter your email");
      return;
    }

    if (!email.includes("@")) {
      setMessage("Please enter a valid email");
      return;
    }

    if (!feedback.trim()) {
      setMessage("Please enter your feedback");
      return;
    }

    setMessage("Feedback submitted successfully!");
  };

  return (
    <div style={styles.container}>
      <h1>Student Feedback Form</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Student Name</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            setMessage("");
          }}
          placeholder="Enter your name"
        />

        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="text"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setMessage("");
          }}
          placeholder="Enter your email"
        />

        <label htmlFor="feedback">Feedback</label>
        <textarea
          id="feedback"
          value={feedback}
          onChange={(e) => {
            setFeedback(e.target.value);
            setMessage("");
          }}
          placeholder="Enter your feedback"
          rows="4"
        />

        <button type="submit">Submit</button>

        {message && (
          <p role="status" aria-live="polite">
            {message}
          </p>
        )}
      </form>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "450px",
    margin: "50px auto",
    padding: "25px",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f4f7fc",
    borderRadius: "10px",
  },
};

export default App;
