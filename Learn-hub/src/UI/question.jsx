import { useState } from "react"
import "./question.css"


export function AskQuestion(){

    return (

        <>
            <section class="heading">
                <h1> Ask a Question</h1>
                <p>Get instant answers to your study questions</p>
            </section>

            <section class ="Ask-Question">
                <h2>Ask Your Question</h2>
                <div class ="questionInput">
                    <input  maxLength ="500" name="questionField" id="question" placeholder="Type your Question here.... (e.g., What are Derivatives?)" columns="30" rows ="5"></input>
                    <button> Ask</button>
                </div>
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
                <div class='questionCard'>
                    <p>What is pythagerean therorem?</p>
                    <label >Mathematices</label>
                </div>
            </section>

           
        </>
    )

}






