export function AskQuestion(){
    return (
        <>
            <section class="heading">
                <h1> Ask a Question</h1>
                <p1>Get instant answers to your study questions</p1>
                 <div class ="Toggle">
                    <label >Ask Question</label>
                    <label>Browse Q/A</label>
                </div>
            </section>

            <section class ="Ask-Question">
                <h2>Ask Your Question</h2>
                <input type="text" name="questionField" id="question" placeholder="Type your Question here.... (e.g., What are Derivatives?)" />
                <div class ="upload">
                    <img src="" alt="" />
                    <h3>Upload a picture of your question</h3>
                    <p>have a homework problem, diagram or handwritten question? upload it here!</p>
                    <input type="file" placeholder="Choose Image"/>
                    <p>supported formats</p>
                </div>
            </section>
            <section class =" popular-questions">
                <h3>Popular Questions</h3>
                <div>
                    <p>What is pythagerean therorem?</p>
                    <label >Mathematices</label>
                </div>
            </section>

           
        </>
    )

}






