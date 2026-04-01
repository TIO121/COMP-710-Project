import "../subject.css"

export function Ancient(){

    return(
        <>
        <div className = "subjectMain">
            <h1>Ancient History</h1>
            <p>Explore the early civilizations and foundations of human society</p>

           
            <section className="conceptCard">
                <h2>Ancient Civilizations</h2>
               <div className="civilizations">
                <div className="civilizationCard">
                    <h2>Ancient Egypt</h2>
                    <p>3100 BCE - 30 BCE</p>
                    <p>Known for pyramids, pharaohs, hieroglyphics, and advanced engineering. The Nile River was central to Egyptian civilization.</p>
                </div>
               </div>
                
            </section>
            <section className="conceptCard">
                <h2>Major Achievements</h2>
                <div className="Achievements">
                    <div className="AchievementsCard">
                        <h2>Writing Systems</h2>
                        <p>Development of cuneiform (Mesopotamia), hieroglyphics (Egypt), and alphabets (Phoenicia)</p>
                    </div>
                </div>
               
            </section>

            <section className="conceptCard">
                <h2>The Seven Wonders of the Ancient World</h2>
                <div className="wonders">
                    <div className="wonderCard">
                        <h3>1 Great Pyramid of Giza (Egypt)</h3>
                    </div>
                </div>
            </section>
        </div>
        
        </>
    )
}