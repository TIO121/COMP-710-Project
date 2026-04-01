import "../subject.css"

export function English(){

    return(
        <>
        <div className = "subjectMain">
            <h1>English</h1>
            <p>Master grammar, vocabulary, and communication skills</p>

           
            <section className="conceptCard">
                <h2>Parts of Speech</h2>
                <div className="parts">
                    <div className="speechCard">
                        <h2>Noun:</h2>
                        <p>Person, place, thing, or idea</p>
                    </div>

                </div>
                
            </section>
            <section className="conceptCard">
                <h2>Sentence Structure</h2>

                <div className="basicPattern">
                    <h2>A basic pattern</h2>
                    <div >
                        <p>Subject + Verb + Object</p>
                    </div>
                    <p>Example: The cat (subject) chased (verb) the mouse (object).</p>
                </div>
                <div className="sentenceTypes">
                    <h2>Types of Sentences</h2>
                    <div className="typeCard">
                        <p>Declarative: <span>Makes a statement</span></p>
                    </div>
                </div>
            </section>
        </div>
        
        </>
    )
}