import React from "react";




function Card(props){
    //let badgeText
    ///if (props.item.endDate === 5) {
       // badgeText = "miaaaaaaaaaaaaaaawww"
   // } 
    
    return(
        <section className="card">
        <img src={`../imgs/${props.item.imageUrl}`} className="card-firstimage" />

         
         <h3 className="card-countryName"> {props.item.location}</h3> 
         <span className="gray" >{props.item.mapss} View On Google Maps</span>
         <h1 className="card-title" >{props.item.title} </h1>
         <h2 className="card-date"> {props.item.startDate} </h2>
         <p className="card-para">{props.item.description} </p>
         <div className="line" ></div>
         
        
        
         

     

        

        
     
        
        </section>
    )
}
export default Card

