import React from 'react'

const IMG_API = "https://image.tmdb.org/t/p/w1280";


function mostrarInfo(name) {
    var x = document.getElementById(name);
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }


const Serie = ({name, poster_path, overview,
    first_air_date, season_number }) => (

         <div onClick={() => {mostrarInfo(name)}} className="filme">
             <img src={IMG_API + poster_path} alt={name}/>

             <div className="filme-info">
                <h3>{name}</h3>
                <p>{overview}</p>
             </div>

             <div id={name} className="infoAdd">
                <h3>{name}</h3>
                <p> Data de Lançamento: {first_air_date}</p>
                <p> Numero de Temporadas: {season_number}</p>
             </div>
         </div>
     
     );

    export default Serie;

    