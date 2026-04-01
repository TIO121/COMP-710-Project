import "../subject.css"
import Quiz from "./quiz"


export function Algebra(){
    /* This is where we will send a prompt to our AI to generate random testing questions, and a practice example*/ 
    
    return(
        <>
            <div className="subjectMain">
                <h1>Algebra</h1>
                <p>Master the fundamentals of algebra, from basic equations to complex polynomials</p>
                <section className="subjectIntroduction">
                    <h2>Introduction to Algebra</h2>
                    <p>Algebra is a branch of subjectematics that uses symbols and letters to represent numbers and quantities in formulas and equations. It's the foundation for advanced subjectematics and is used extensively in science, engineering, and everyday problem-solving.</p>

                </section>
                <section className="ConceptCard">
                    <h2>Basic Concepts</h2>
                    <div className="AlgebraConceptCard">
                        <h2>Variiables</h2>
                        <p>Variables are symbols (usually letters) that represent unknown values. For example, in the equation x + 5 = 10, x is a variable that equals 5.</p>
                    </div>
                </section>
                <section className="exampleCard">
                    <h2>Solving Linear Equations</h2>
                    <p>To solve a linear equation, isolate the variable on one side of the equation:</p>
                    <p>Example: 2x + 6 = 14</p>
                    <p>Step 1: Subtract 6 from both sides</p>
                    <p>2x = 8</p>
                    <p>Step 2: Divide both sides by 2</p>
                    <p>x = 4</p>
                </section>
                <section className="practiceProblems">
                    <div>
                        <p>1. Solve for x: 3x - 5 = 16</p> <p>Answers: x=7</p>
                    </div>
                </section>
                <section className="subjectFormulas">
                    <div className="FormulaCard"><p>Distributive proerty:  a(b + c) = ab + ac</p></div>
                </section>
                <section className="subjectQuiz">
                    <Quiz/>
                </section>
            </div>
        </>
    )
}