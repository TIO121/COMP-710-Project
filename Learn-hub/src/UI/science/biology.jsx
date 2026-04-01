import "../subject.css"

export function Biology(){

    return(<>

         <div className="subjectMain">
            <h1>Biology</h1>
            <p>Study the science of life and living organisms</p>
            <section className ="subjectIntroduction">
                <h2>Introduction to Biology</h2>
                <p>Biology is the scientific study of life and living organisms. It encompasses a wide range of topics from molecular biology and genetics to ecology and
                     evolution, helping us understand how life works at all levels.
                </p>
            </section>

            <section className="conceptCard">
                <h2>The Cell</h2>
                <p>The cell is the basic unit of life. All living organisms are made up of one or more cells.</p>
                <div className ="cells">
                    <div className="cellCard">
                        <h2>Nucleus:</h2>
                        <p>Contains DNA, controls cell activities</p>
                    </div>
                </div>
            </section>

             <section className="conceptCard">
                <h2>DNA and Genetics</h2>
                <div className="structure">
                    <h2> DNA Structure</h2>
                    <p>DNA (Deoxyribonucleic Acid) is a double helix molecule that contains genetic information. 
                        It's made up of four bases: Adenine (A), Thymine (T), Guanine (G), and Cytosine (C).
                    </p>
                </div>
                <div className="pairingRules">
                    <h2>Base Pairing Rules</h2>
                    <div>
                        <div>A ↔ T</div>
                        <div>G ↔ C</div>
                    </div>
                </div>
                <div className="Dogma">
                    <h2>Central Dogma</h2>
                    <div>DNA → RNA → Protein</div>
                </div>

            </section>

             <section className="conceptCard">
                <h2>Evolution and Natural Selection</h2>
                <p>Evolution is the process by which species change over time through natural selection and genetic variation.</p>
                <div className="darwinsPrinciples">
                    <h2>Darwin Principles</h2>
                    <div className="principleCard">
                       <h3>1. Variation:</h3><p>Individuals in a population vary</p>
                    </div>
                </div>
            </section>

             <section className="conceptCard">
                <h2>Ecosystems</h2>
                <div className = "energyflow">
                    <h2>Engery Flow</h2>
                    <div className="flow">
                        <div><p>Producers (Plants) - Convert sunlight to energy</p></div>
                        <p>↓</p>
                        <div><p>Primary Consumers (Herbivores) - Eat plants</p></div>
                        <p>↓</p>
                        <div><p>Secondary Consumers (Carnivores) - Eat herbivores</p></div>
                        <p>↓</p>
                        <div><p>Decomposers - Break down dead matter</p></div>
                     
                        
                    </div>
                </div>
            </section>
             <section className="conceptCard">
                <h2>Human Body Systems</h2>
                <div className = "HumanBody">
                    <div className="system">Circulatory system</div>
                </div>
            </section>
         </div>
    </>)
}