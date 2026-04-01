import "../subject.css"

export function Chemistry(){

    return(
        <>
        <div className = "subjectMain">
            <h1>Chemistry</h1>
            <p>Explore the composition, structure, and properties of matter</p>

            <section className="subjectIntroduction">
                <h2>Introduction to Chemistry</h2>
                <p>Chemistry is the scientific study of matter, its properties, composition, structure, and the
                    changes it undergoes during chemical reactions. It's often called the "central 
                    science" because it connects physics with biology and other sciences.
                </p>
            </section>
            <section className="conceptCard">
                <h2>Periodic Table</h2>
                <p>The periodic table organizes all known chemical elements by their atomic number, 
                    electron configuration, and recurring chemical properties.
                </p>
                <div>
                    <div className="Metals">
                        <h2>Alkali Metals</h2>
                        <p>Group 1</p>
                    </div>
                </div>
            </section>
            <section className="conceptCard">
                <h2>Atomic Structure</h2>
                <div className="particles">
                    <h2>Subtomic particles</h2>
                    <div className ="particleCard">
                        <p>protrons</p>
                        <p>Positive charge (+1)</p>
                    </div>
                </div>
                <h2>Key Concept</h2>
                <p>• Atomic number = number of protons</p>
                <p>• Mass number = protons + neutrons</p>
                <p>• Isotopes have same protons, different neutrons</p>
               
            </section>

            <section className="conceptCard">
                <h2>Chemical Bonds</h2>
                <div className="chemicalBondCard">
                    <h2>Ionic Bonds</h2>
                    <p>Formed when electrons are transferred from one atom to another, 
                        creating oppositely charged ions that attract each other.
                    </p>
                </div>
            </section>

            <section className="conceptCard">
                <h2>Chemical Reactions</h2>
                <div className="reactions"> 
                    <h2>Types of Reactions</h2>
                    <div className="reactionsCard">
                        <h2>Synthesis</h2>
                        <p>A + B → AB</p>
                    </div>
                </div>
            </section>
            <section className="conceptCard">
                <h2>States of Matter</h2>
                <div className="statesofMatter">
                    <div className="matterCard">
                        <h2>solid</h2>
                        <p>Fixed shape and volume. Particles vibrate in fixed positions.</p>
                    </div>
                </div>
            </section>
        </div>
        
        </>
    )
}