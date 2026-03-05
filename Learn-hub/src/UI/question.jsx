import { useState } from "react";
import Sidebar from './sidebar.jsx';
import axios from "axios";

export function AskQuestion() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [subject, setSubject] = useState("Mathematics"); // default subject

  const handleSubmit = async () => {
    if (!question) return;

    try {
      const res = await axios.post("http://localhost:3001/ask", {
        question,
        subject,
      });
      setAnswer(res.data.answer);
    } catch (err) {
      console.error(err);
      setAnswer("Error fetching answer. Try again.");
    }
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh", minWidth: "100vw" }}>
      <div style={{ flex: 1, padding: "20px" }}>
        <section className="heading">
          <h1>Ask a Question</h1>
          <p>Get instant answers to your study questions</p>
          <div className="Toggle">
            <label>Ask Question</label>
            <label>Browse Q/A</label>
          </div>
        </section>

        <section className="Ask-Question">
          <h2>Ask Your Question</h2>
          <select value={subject} onChange={(e) => setSubject(e.target.value)}>
            <option>Mathematics</option>
            <option>Computer Science</option>
            <option>History</option>
            <option>Science</option>
            <option>Languages</option>
          </select>
          <input
            type="text"
            name="questionField"
            id="question"
            placeholder="Type your Question here...."
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
          <button onClick={handleSubmit}>Ask</button>

          {answer && (
            <div className="answer">
              <h3>Answer:</h3>
              <p>{answer}</p>
            </div>
          )}

          <div className="upload">
            <h3>Upload a picture of your question</h3>
            <input type="file" />
            <p>Supported formats: JPG, PNG</p>
          </div>
        </section>

        <section className="popular-questions">
          <h3>Popular Questions</h3>
          <div>
            <p>What is Pythagorean theorem?</p>
            <label>Mathematics</label>
          </div>
        </section>
      </div>
    </div>
  );
}