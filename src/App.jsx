
import { useState } from "react";

export default function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !feedback.trim()) {
      setMessage("Please fill in all fields.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setMessage("Please enter a valid email address.");
      return;
    }

    setMessage("Thank you for your feedback!");
    setName("");
    setEmail("");
    setFeedback("");
  }

  return (
    <main className="container">
      <h1>Feedback Form</h1>
      <p>We value your feedback!</p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />

        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />

        <label htmlFor="feedback">Feedback</label>
        <textarea
          id="feedback"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          placeholder="Write your feedback"
          rows="4"
        />

        <button type="submit">Submit Feedback</button>
        {message && <p role="status">{message}</p>}
      </form>
    </main>
  );
}
