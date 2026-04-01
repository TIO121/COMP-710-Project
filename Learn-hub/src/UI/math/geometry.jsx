import "../subject.css"

export function Geometry(){
    return(
        <>
            <div className="subjectMain">
                <h1> Geometry</h1>
                <p>Study shapes, sizes, positions, and properties of space</p>
                <section className="subjectIntroduction">
                    <h2>Introduction to Geometry</h2>
                    <p>Geometry is a branch of subjectematics concerned with questions of shape, size, relative position of figures, and the properties of space. It is one of the oldest branches of subjectematics, dating back to ancient civilizations.</p>
                </section>

                <section className="conceptCard">
                    <h2>Basic shapes and Formulas</h2>
                    <div className="subjectFormulaCard">
                        <h2>Circle</h2>
                        <div className="equationCard">
                            <div><p>Area:</p><p>A = πr²</p></div>
                            <div><p>Circumference</p><p>C = 2πr</p></div>
                        </div>
                    </div>
                </section>

                <section className="conceptCard">
                    <h2>Pythagorean Theorem</h2>
                    <p>In a right triangle, the square of the hypotenuse equals the sum of squares of the other two sides.</p>
                    <p>a² + b² = c²</p>
                    <p>example:</p>
                    <p>If a = 3 and b = 4, then c = √(3² + 4²) = √(9 + 16) = √25 = 5</p>
                </section>
                <section className="conceptCard">
                    <h2>3D Shapes</h2>
                    <div className="subjectFormulaCard">
                        <h2>Sphere</h2>
                        <div className="equationCard">
                            
                            <div><p>Volume:</p><p>V = (4/3)πr³</p></div>
                            <div><p>SurfaceArea:</p><p>SA = 4πr²</p></div>
                        </div>
                    </div>
                </section>

            
                            

            </div>
        
        </>
    )
}