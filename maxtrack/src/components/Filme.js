import React from 'react'

const IMG_API = "https://image.tmdb.org/t/p/w1280";


function mostrarInfo(id) {
  var x = document.getElementById(id.toString());
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}


const Filme = ({ id, title, poster_path, vote_average, overview,
     release_date }) => (

         <div onClick={() => {mostrarInfo(id)}} className="filme">
             <img src={IMG_API + poster_path} alt={title}/>

             <div className="filme-info">
                <h3>{title}</h3>
                <p>{overview}</p>
             </div>

             <div id={id} className="infoAdd">
                <h3>{title}</h3>
                <p>Avaliação: {vote_average}</p>
                <p>Data de lançamento: {release_date}</p>
             </div>
         </div>
     
     );

    export default Filme;

    