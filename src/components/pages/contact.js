import React from 'react';
import Pic from "../../../static/assets/images/auth/login.jpg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


export default function() {
    return(
        <div className="content-page-wrapper">
        <div className="left-column" 
            style= {{
                background: "url(" + Pic + ") no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center"
            }}
         />
         <div className = "right-column">
         <div className= "contact-group">

         <div className= "bullet-point-group">
         <div className= "icon">
            <FontAwesomeIcon icon= "phone"/>
        </div> 
        <div className="text">
                 123456789
        </div>
        </div>

         <div className= "bullet-point-group"> 
         <div className= "icon">
            <FontAwesomeIcon icon= "at"/>
           </div> 
              <div className="text">
                1234@yahoo.com
              </div>
         
        </div>

        <div className= "bullet-point-group">
         <div className= "icon">
            <FontAwesomeIcon icon= "home"/>
           </div> 
        <div className= "text">
                1234,
                Your Moms House,
                Ca
        </div> 

        </div>
         </div>
         </div>
         </div>
       
         
             );
            }