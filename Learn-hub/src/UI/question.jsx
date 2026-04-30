import { useState } from "react"
import "./question.css"


export function AskQuestion(){
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [imageName, setImageName] = useState("");

    const sendQuestion = async (payload) => {
        setLoading(true);
        setAnswer("");
        setError("");

        try {
            const response = await fetch("http://localhost:3001/ask", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Something went wrong.");
            }

            setAnswer(data.answer);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const askQuestion = () => {
        if (!question.trim()) {
            setError("Please type a question first.");
            return;
        }

        sendQuestion({ question });
    };

    const handleImageUpload = (event) => {
        const file = event.target.files?.[0];

        if (!file) return;

        if (!file.type.startsWith("image/")) {
            setError("Please choose an image file.");
            return;
        }

        setImageName(file.name);

        const reader = new FileReader();

        reader.onload = () => {
            const image = reader.result.split(",")[1];
            sendQuestion({
                question: question.trim() || "Please solve the problem shown in this image.",
                image,
            });
        };

        reader.onerror = () => {
            setError("Could not read the image. Please try another file.");
        };

        reader.readAsDataURL(file);
    };

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            askQuestion();
        }
    };

    return (

        <>
            <section className="heading">
                <h1> Ask a Question</h1>
                <p>Get instant answers to your study questions</p>
            </section>

            <section className ="Ask-Question">
                <h2>Ask Your Question</h2>
                <div className ="questionInput">
                    <input
                        maxLength ="500"
                        name="questionField"
                        id="question"
                        placeholder="Type your Question here.... (e.g., What are Derivatives?)"
                        value={question}
                        onChange={(event) => setQuestion(event.target.value)}
                        onKeyDown={handleKeyDown}
                    />
                    <button onClick={askQuestion} disabled={loading}>
                        {loading ? "Asking..." : "Ask"}
                    </button>
                </div>
                {error && <p className="questionError">{error}</p>}
                {answer && (
                    <div className="answerBox">
                        <h3>Answer</h3>
                        <p>{answer}</p>
                    </div>
                )}
                <div className ="upload">
                    <img src="" alt="" />
                    <h3>Upload a picture of your question</h3>
                    <p>have a homework problem, diagram or handwritten question? upload it here!</p>
                    <input
                        type="file"
                        accept="image/png, image/jpeg, image/jpg"
                        onChange={handleImageUpload}
                    />
                    {imageName && <p className="imageStatus">Selected: {imageName}</p>}
                    <p>supported formats: PNG JPG, JPEG</p>
                </div>
            </section>
            <section className =" popular-questions">
                <h3>Popular Questions</h3>
                <div className='questionCard'>
                    <p>What is pythagerean therorem?</p>
                    <label >Mathematices</label>
                </div>
            </section>

           
        </>
    )

}




