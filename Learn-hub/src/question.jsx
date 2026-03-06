
import "./navigationBar.css"
function NavigationvBar(){
    return(
        <div class="navbar">
            <div class ="Logo">
               <a href="#">LearnHub</a>
            </div>
            <ul class ="nav-links">
                <li class= "dropdown">
                    <a href="#">Mathematics <span class="arrow"> ^</span> </a>
                    <ul class="dropdown-menu">
                        <li><a href="#">Algebra</a></li>
                        <li><a href="#">Calculus</a></li>
                        <li><a href="#">Geometry</a></li>
                    </ul>
                </li>
                  <li class= "dropdown">
                    <a href="#">Science</a>
                    <ul class="dropdown-menu">
                        <li><a href="#">Physics</a></li>
                        <li><a href="#">Chemistry</a></li>
                        <li><a href="#">Biology</a></li>
                    </ul>
                </li>
                  <li class= "dropdown">
                    <a href="#">History</a>
                    <ul class="dropdown-menu">
                        <li><a href="#">Ancient History</a></li>
                        <li><a href="#">Medival History</a></li>
                        <li><a href="#">Modern History</a></li>
                    </ul>
                </li>
                  <li class= "dropdown">
                    <a href="#">Languages</a>
                    <ul class="dropdown-menu">
                        <li><a href="#">English</a></li>
                        <li><a href="#">Spanish</a></li>
                        <li><a href="#">French</a></li>
                    </ul>
                </li>
                  <li class= "dropdown">
                    <a href="#">Computer Science</a>
                    <ul class="dropdown-menu">
                        <li><a href="#">Programming Basics</a></li>
                        <li><a href="#">Web Development</a></li>
                        <li><a href="#">Data Science</a></li>
                    </ul>
                </li>
                <li>
                    <a href="#"> Ask a Question</a>
                </li>
            </ul>
        </div>
    )
}
export default NavigationvBar