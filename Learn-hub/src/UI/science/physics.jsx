import "../subject.css"
export function Physics(){

    return (
        <>
        <div className="subjectMain">
            <h1 className="subjectHearder">Physics</h1>
            <p>Understand the fundamental laws governing matter, energy, and the universe</p>

            <section className = "subjectIntrodction">
                <h2>Introductions to Physics</h2>
                <p>Physics is the natural science that studies matter, energy, and the fundamental forces of nature. It seeks to understand how the 
                    universe behaves through observation, experimentation, and mathematical modeling.</p>
            </section>

            <section className="conceptCard">
                <h2>Newton's Laws of Motion</h2>
                <div className = "lawConcept">
                    <h2>First Law (Inertia)</h2>
                    <p> An object at rest stays at rest, and an object in 
                    motion stays in motion with constant velocity unless acted upon by an external force.</p>
                </div>
            </section>
            <section className='conceptCard'>
                <h2>Energy and Work</h2>
                <div className="EnergyCard">
                    <h2>Kinetic Engery</h2>
                    <p>The energy of motion</p>
                    <p>KE = ½mv²</p>
                </div>
            </section>
            <section className="conceptCard">
                <h2>Electricity and Magnetism</h2>
                <div className='electricityCard'> 
                    <h2>Ohm's Law</h2>
                    <p>V = IR</p>
                    <p>Voltage (V) = Current (I) × Resistance (R)</p>
                </div>

            </section>
            <section className="conceptCard">
                <div className="waveEquation">
                    <h2>Wave Equation</h2>
                    <p>v = fλ</p>
                    <p>Velocity = Frequency × Wavelength</p>
                </div>
                <div className="wavePropertiesCard">
                    <div><p>amplitude</p></div>
                     <div><p>frequency</p></div>
                      <div><p>Wavelength</p></div>
                       <div><p>period</p></div>
                </div>
            </section>

            
        </div>

        </>
    )
}