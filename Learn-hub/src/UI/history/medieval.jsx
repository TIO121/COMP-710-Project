import "../subject.css"

export function Medieval(){

    return(
        <>
        <div className = "subjectMain">
            <h1>Medieval History</h1>
            <p>Discover the Middle Ages, from the fall of Rome to the Renaissance</p>

            <section className="subjectIntroduction">
                <h2>The Middle Ages (500 - 1500 CE)</h2>
                <p>The Medieval period, also known as the Middle Ages, spans roughly 1,000 years of European history. It began with the
                     fall of the Western Roman Empire and ended with the Renaissance and Age of Discovery.
                </p>
            </section>
            <section className="conceptCard">
                <h2>Fedual System</h2>
                <p>The feudal system was the dominant social structure in medieval Europe, based on land ownership and obligations
                </p>
                <div className="feudalClassCard">
                    <h2>King/Monarch</h2>
                    <p>Supreme ruler, owned all the land</p>

                </div>
            </section>
            <section className="conceptCard">
                <h2>Major Events</h2>
                <div className="events"> 
                    <div className="eventCard">
                        <h2>The Crusades (1096-1291)</h2>
                        <p>Religious wars between Christians and Muslims for control of the Holy Land</p>
                    </div>
                </div>
                    
       
               
            </section>

            <section className="conceptCard">
                <h2>Medieval Life</h2>
                <div className="lifeStyle">
                    <div className="styleCard">
                        <h2>Castles</h2>
                        <p>Fortified structures serving as homes for nobility and centers of defense</p>
                    </div>
                    
                </div>
            </section>
        </div>
        
        </>
    )
}