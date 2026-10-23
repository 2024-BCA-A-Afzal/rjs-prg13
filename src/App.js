
import React, { useState } from "react";

function App() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [feedback, setFeedback] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        setError("");
        setSuccess("");

        // Validate Name
        if (name.trim() === "") {
            setError("Please enter your name.");
            return;
        }

        // Validate Email
        if (email.trim() === "") {
            setError("Please enter your email.");
            return;
        }

        // Validate Email format
        if (!email.includes("@")) {
            setError("Please enter a valid email address.");
            return;
        }

        // Validate Feedback
        if (feedback.trim() === "") {
            setError("Please enter your feedback.");
            return;
        }

        // Successful submission
        setSuccess("Feedback submitted successfully!");

        // Clear form
        setName("");
        setEmail("");
        setFeedback("");
    };

    return (
        <div className="container">

            <h1>Student Feedback Form</h1>

            <form onSubmit={handleSubmit}>

                <div>
                    <label htmlFor="name">Name:</label>
                    <br />

                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        placeholder="Enter your name"
                    />
                </div>

                <br />

                <div>
                    <label htmlFor="email">Email:</label>
                    <br />

                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        placeholder="Enter your email"
                    />
                </div>

                <br />

                <div>
                    <label htmlFor="feedback">Feedback:</label>
                    <br />

                    <textarea
                        id="feedback"
                        rows="5"
                        value={feedback}
                        onChange={(event) => setFeedback(event.target.value)}
                        placeholder="Enter your feedback"
                    ></textarea>
                </div>

                <br />

                {error && (
                    <p>
                        {error}
                    </p>
                )}

                {success && (
                    <p>
                        {success}
                    </p>
                )}

                <button type="submit">
                    Submit Feedback
                </button>

            </form>

        </div>
    );
}

export default App;
