
import "./math.css"

export function Calculus(){

    return(
        <>
        <div className="MathMain">
            <h1>Calculus</h1>
            <p>Explore the mathematics of change through derivatives and integrals</p>

            <section className="MathIntroduction">
                <h2>Introduction to Calculus</h2>
                <p>Calculus is the mathematical study of continuous change. It has two major branches: differential calculus (concerning rates of change and slopes) and integral calculus (concerning accumulation of quantities and areas under curves).</p>
            </section>
            <section className="MathConcept">
                <h2>Limits</h2>
                <p>A limit is the value that a function approaches as the input approaches some value. Limits are essential for defining derivatives and integrals.</p>
                <p > lim(x→a) f(x) = L </p>
                <p>This reads: "The limit of f(x) as x approaches a equals L"</p>
            </section>
            <section className="MathApplications">
                <h2>Physics</h2>
                <p>Calculating velocity, acceleration, and optimization problems</p>
            </section>
        </div>
        </>
    )
}