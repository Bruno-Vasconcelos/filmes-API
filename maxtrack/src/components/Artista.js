import React from 'react'

const IMG_API = "https://image.tmdb.org/t/p/w1280";


function mostrarInfo(name) {
    var x = document.getElementById(name);
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

const Serie = ({name, profile_path, popularity }) => (

         <div onClick={() => {mostrarInfo(name)}} className="filme">
             <img src={IMG_API + profile_path} alt={name}/>

             <div className="filme-info">
                <h3>{name}</h3>
             </div>

             <div id={name} className="infoAdd">
                <h3>{name}</h3>
                <p>"Popularidade: "+{popularity}</p>
             </div>
         </div>
     
     );

    export default Serie;

    