import React from "react";
import preLoader from "../../../asserts/images/Infinity-0.7s-210px.svg";


function Preloader(){
   return  <div style={{backgroundColor:"white"}}>
        <img src={preLoader} />
    </div>
}

export default Preloader