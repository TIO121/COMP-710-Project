import "./navigationBar.css"
import logo from "../assets/logo.png"
import { Navigate, useNavigate } from "react-router-dom"
import { use, useEffect, useState } from "react"

function NavigationvBar(){
    const [subject, setSubject] = useState("/");
    const navigate = useNavigate()
    const toIndex = () => { 
        navigate('/'); 
        window.scrollTo({top: 0, behavior: 'smooth'});
    }
    
    

    
    useEffect(()=>{
        navigate(subject)
    }, [subject])
  
    
    return(
        <div class="navbar">
            <div class ="Logo">
               <a href="#" class = "brand" onClick={toIndex}>
                <img src={logo} alt="LearnHub Logo" class="brand-logo" />
                EduSphere/SkillSync</a>
            </div>
            <ul class ="nav-links">
                <li class= "dropdown">
                    <a href="#" >
                        <span class="nav-icon">📐</span>
                        Mathematics <span class="arrow">▼</span>
                    </a>
                    <ul class="dropdown-menu">
                        <li onClick={() =>{
                            setSubject('/algebra');
                        
                        }}><a href="#">Algebra</a></li>
                        <li onClick={()=>{
                            setSubject('/calculus');
                            
                        }}><a href="#">Calculus</a></li>
                        <li onClick={()=>{
                            setSubject('/geometry');
                            
                        }}><a href="#">Geometry</a></li>
                    </ul>
                </li>
                  <li class= "dropdown">
                    <a href="#">
                        <span class="nav-icon">🔬</span>
                        Science <span class="arrow">▼</span></a>
                    <ul class="dropdown-menu">
                        <li onClick={()=>{
                            setSubject('/physics');

                        }}><a href="#">Physics</a></li>
                        <li onClick={()=>{
                            setSubject('/chemistry');

                        }}><a href="#">Chemistry</a></li>
                        <li onClick={()=>{
                            setSubject('/biology');

                        }}><a href="#">Biology</a></li>
                    </ul>
                </li>
                  <li class= "dropdown">
                    <a href="#">
                        <span class="nav-icon">📜</span>
                        History <span class="arrow">▼</span>
                    </a>
                    <ul class="dropdown-menu">
                        <li onClick={()=>{
                            setSubject('/ancient');

                        }}><a href="#">Ancient History</a></li>
                        <li onClick={()=>{
                            setSubject('/medieval');

                        }}><a href="#">Medieval History</a></li>
                        <li onClick={()=>{
                            setSubject('/modern');

                        }}><a href="#">Modern History</a></li>
                    </ul>
                </li>
                  <li class= "dropdown">
                    <a href="#">
                        <span class="nav-icon">🗣️</span>
                        Languages <span class="arrow">▼</span>
                    </a>
                    <ul class="dropdown-menu">
                        <li onClick={()=>{
                            setSubject('/english');

                        }}><a href="#">English</a></li>
                        <li onClick={()=>{
                            setSubject('/spanish');

                        }}><a href="#">Spanish</a></li>
                        <li onClick={()=>{
                            setSubject('/french');

                        }}><a href="#">French</a></li>
                    </ul>
                </li>
                  <li class= "dropdown">
                    <a href="#">
                        <span class="nav-icon">💻</span>
                        Computer Science <span class="arrow">▼</span>
                    </a>
                    <ul class="dropdown-menu">
                        <li onClick={()=>{
                            setSubject('/programming');

                        }}><a href="#">Programming Basics</a></li>
                        <li onClick={()=>{
                            setSubject('/webdevelopment');

                        }}><a href="#">Web Development</a></li>
                        <li onClick={()=>{
                            setSubject('/datascience');

                        }}><a href="#">Data Science</a></li>
                    </ul>
                </li>
                <li>
                    <a href="#" onClick={()=>navigate("/question")}> 
                        <span class="nav-icon">💬</span>
                        Ask a Question</a>
                </li>

            </ul>
        </div>
    )
}
export default NavigationvBar
