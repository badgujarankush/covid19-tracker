import React from "react";

import book from "./book.jpg";
import take from "./take.jpg";
import down from "./down.jpg";

import "./Vcard.css";

const Vcard = (props) => {
  var imgTemp ="";
  if(props.useravatar === "book"){
    imgTemp = book;
  }else if(props.useravatar==="take"){
    imgTemp = take;
  }else{
    imgTemp = down;
  } 
  return (
    // <div className="v-card">
      <div class="v-card">
             <div class="img-tag">
                 <img src={imgTemp} alt="" />
             </div>
      
             <div class="info">
                 {/* <h1 class="title">Nike AirVapor Max 2019</h1> */}
                 <h3 class="description">{props.content}</h3>
          
                  <a href={props.link}>{props.linkTitle}</a>
                </div>
         </div>
      //  </div>
    
  );
};

export default Vcard;
