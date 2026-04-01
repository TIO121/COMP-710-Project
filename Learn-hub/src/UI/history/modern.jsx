import "../subject.css"

export function Modern(){

    return(
        <>
        <div className = "subjectMain">
            <h1>Modern History</h1>
            <p>Understand the transformative events that shaped our contemporary world</p>

            <section className="conceptCard">
                 <h2>Age of Revolutions(1700-1900s)</h2>
            
                <div className ="revolutions">
                    <div className="revolutionCard">
                        <h2>🗽 American Revolution (1775-1783)</h2>
                        <p>Thirteen American colonies gained independence from Britain, 
                            establishing the United States of America.
                        </p>
                    </div>
                </div>
            </section>
            <section className="conceptCard">
                <h2>World Wars</h2>
                <div className="wars">
                    <div className ="warCard">
                       <h2>World War I (1914-1918)</h2>
                       <p>"The Great War" involved major world powers divided into Allied and Central Powers.</p>
                       <p>Triggered by assassination of Archduke Franz Ferdinand</p>
                       <p>Trench warfare and new military technolog</p>
                       <p>Treaty of Versailles reshaped Europe</p>
                       <p>Approximately 20 million deaths</p>
                    </div>
                </div>
            </section>

            <section className="conceptCard">
                <h2>Cold War Era (1947-1991)</h2>
                <p>Period of geopolitical tension between the United States and Soviet Union following World War II.</p>
                <div className="teams">
                    <div className="team1">
                        <h2>🇺🇸 Western Bloc</h2>
                        <p>USA, NATO, Capitalism</p>
                    </div>
                    <div className="team2">
                        <h2>🇷🇺 Eastern Bloc</h2>
                        <p>USSR, Warsaw Pact, Communism</p>
                    </div>

                </div>

                <div className="coldwarCard">
                    <h2>Space Race:</h2>
                    <p>Competition for space exploration achievements</p>

                </div>
            </section>

            <section className="conceptCard">
                <h2>Recent History</h2>
                <div className="historyCard"> 
                    <h2>Digital Revolution</h2>
                    <p>Internet, smartphones, and social media transformed global communication</p>
                </div>
            </section>
           
        </div>
        
        </>
    )
}