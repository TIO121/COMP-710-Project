import "./mainPage.css"

function Homepage(){
    return(
        <>
        {/* Navbar */}
        <nav className="navbar">
            <div className="logo">
                🎓 <span>LearnHub</span>
            </div>

            <ul className="nav-links">
                <li>📐 Mathematics</li>
                <li>🔬 Science</li>
                <li>📜 History</li>
                <li>🗣️ Languages</li>
                <li>💻 Computer Science</li>
            </ul>
        </nav>


        {/* Hero Section */}
        <section className="hero">
            <h1>Welcome to LearnHub</h1>

            <p>
            Your comprehensive online learning platform. Explore a wide range of subjects,
            from mathematics to computer science, all in one place.
            </p>

            <button>Start learning →</button>
        </section>


        {/* Subjects */}
        <h2 className="section-title">Explore Our Subjects</h2>

        <section className="subjects">
            <div className="card">
                <div className="icon math">📐</div>
                <h4>Mathematics</h4>
            </div>

            <div className="card">
                <div className="icon science">🔬</div>
                <h4>Science</h4>
            </div>

            <div className="card">
                <div className="icon history">📜</div>
                <h4>History</h4>
            </div>

            <div className="card">
                <div className="icon language">🗣️</div>
                <h4>Languages</h4>
            </div>

            <div className="card">
                <div className="icon cs">💻</div>
                <h4>Computer Science</h4>
            </div>
        </section>


        {/* Why Section */}
        <section className="why">
            <h2 className="section-title">Why Choose LearnHub?</h2>

            <div className="features">
                <div className="feature-box">
                    <h3>Expert Content</h3>
                    <p>High-quality lessons created by experienced educators.</p>
                </div>

                <div className="feature-box">
                    <h3>Flexible Learning</h3>
                    <p>Study at your own pace anytime, anywhere.</p>
                </div>

                <div className="feature-box">
                    <h3>Interactive Practice</h3>
                    <p>Engaging quizzes and exercises to reinforce learning.</p>
                </div>
            </div>
        </section>


        {/* Journey Section */}
        <section className="journey">
            <h3>Ready to start your learning journey?</h3>

            <p>
            Choose a subject from the navigation menu above and dive into
            comprehensive lessons designed to help you master any topic.
            </p>

            <button className="journey-button">Browse All Topics</button>
        </section>
        </>
    );
}

export default Homepage;