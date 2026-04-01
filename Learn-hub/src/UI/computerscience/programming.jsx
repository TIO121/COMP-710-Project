import "../subject.css"

export function Programming(){

    return(
        <>
        <div className = "subjectMain">
            <h1>Programming Basics</h1>
            <p>Learn the fundamentals of computer programming</p>

            <section className ="subjectIntroduction">
                <h2>What is Programming?</h2>
                <p>Programming is the process of creating instructions that a computer can execute to perform specific tasks. It involves writing code
                     in a programming language that tells the computer what to do, step by step.
                </p>
            </section>

           
            <section className="conceptCard">
                <h2>Basic Programming Concepts</h2>
               <div className="Concepts">
                    <div className="programmingConceptCardOne">
                        <h2>Variables</h2>
                        <p>Containers that store data values for later use</p>
                        <div className="codeSnippet">
                            <p>let name = "Alice";</p>
                            <p>let age = 25;</p>
                        </div>
                    </div>
                    <div className="programmingConceptCardTwo">
                        <h2>Data types</h2>
                        <p>Different kinds of values that can be stored and manipulated</p>
                        <div className="optionsCards">
                            <div>
                                <div><p>String: "Hello"</p></div>
                                <div><p>Number: 42</p></div>
                            </div>
                        </div>
                    </div>
               </div>
                
            </section>
           <section className="conceptCard">
                <h2>Popular Programming Languages</h2>
                <div className="Languages">
                    <div className="LanguageCard">
                        <h2>☕ JavaScript</h2>
                        <p>Essential for web development, runs in browsers and servers</p>
                    </div>
                </div>
            </section>

            <section className="conceptCard">
                <h2>The Seven Wonders of the Ancient World</h2>
                <div className="steps">
                    <div className="stepCard">
                        <div className="numberIcon"><p>1</p></div>
                        <div className="stepInfo">
                            <h2>Understand the Problem</h2>
                            <p>Read and analyze what needs to be solved</p>
                            </div>
                    </div>
                </div>
            </section>
        </div>
        
        </>
    )
}