.hero{
    text-align:  center;
    padding: 100px 20px 100px;
}
.hero h1{
    font-size: 48px;
    margin-bottom: 20px
}
.hero p{
    max-width: 700px;
    margin: auto;
    color:  gray;
    font-size: 18px;

}
.hero button{
    margin-top: 35px;
    padding: 14px 28px;
    background: #0f172a;
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 15px;
    cursor: pointer;
    max-width: 300px;
    width: 200px;

}
.hero button:hover{
    background: #1e293b;
}

/*Section*/
.section-title {
    text-align: center;
    font-size: 28px;
    margin-bottom: 50px;
}

.subjects {
    display: flex;
    justify-content: center;
    gap: 30px;
    padding: 0 60px 120px;
    /* flex-wrap: wrap; */
}

.card{
     background: white;
    width: 230px;
    height: 125px;
    border-radius: 14px;
    border: 1px solid #e5e5e5;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: .7s;
    cursor: pointer;
}
.card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0,0,0,0.05);
}

.icon{
    width:60px;
    height: 60px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content:  center;
    font-size: 24px;
}
.math{background: lightblue;}
.science{background: lightcoral;}
.history{background: lightgreen;}
.cs{background: lightskyblue;}
.language{background: tan;}


/* Section */
.why{
    background-color: rgb(239, 236, 236);
    display: flex;
    flex-direction: column;
    padding: 40px 80px;
    
    
}
.features{
    display: flex;
    justify-content: center;
}
.feature-box{
    background-color: white;
    margin: 5px 15px;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    border: 1px solid lightgrey;

    
}
.feature-box h3{
    margin-bottom: 10px;
    color: black;
    font-size: 18px;
}
.feature-box p{
    margin: 10px 12px;
    color: gray;
    font-size: 14px;
}


/*section*/
.journey{
   display: flex;
   flex-direction: column;
   align-items: center;
   padding: 100px 20px 100px;


}
.journey h3{
    color: black;
    font-weight: 500;
    margin-bottom: 10px;
    font-size: 30px;

}
.journey p{
    max-width: 650px;
    margin: auto;
    color: gray;
    font-size: 15px;
    font-weight: 500;

}
.journey button{
    background: white;
    border: 1px solid lightgrey;
    border-radius: 10px;
    margin-top: 30px;
    max-width: 300px;
    width: 175px;
    font-size: 15px;
    font-weight: 600;
    padding-top: 7px;
 

}
.journey button:hover{
    background-color: lightgrey;
    max-width: 300px;
    width: 200px;
}
