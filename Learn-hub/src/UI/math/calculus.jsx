
import "../subject.css"

export function Calculus(){

    return(
        <>
        <div className="subjectMain">
            <h1>Calculus</h1>
            <p>Explore the subjectematics of change through derivatives and integrals</p>

            <section className="subjectIntroduction">
                <h2>Introduction to Calculus</h2>
                <p>Calculus is the subjectematical study of continuous change. It has two major branches: differential calculus (concerning rates of change and slopes) and integral calculus (concerning accumulation of quantities and areas under curves).</p>
            </section>
            <section className="conceptCard">
                <h2>Limits</h2>
                <p>A limit is the value that a function approaches as the input approaches some value. Limits are essential for defining derivatives and integrals.</p>
                <p > lim(x→a) f(x) = L </p>
                <p>This reads: "The limit of f(x) as x approaches a equals L"</p>
            </section>
            <section className="subjectApplications">
                <h2>Physics</h2>
                <p>Calculating velocity, acceleration, and optimization problems</p>
            </section>
        </div>
        </>
    )
}