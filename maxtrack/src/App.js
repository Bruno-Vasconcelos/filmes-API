/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState} from 'react';

import './App.css';
import Filme from './components/Filme';
import Serie from './components/Serie';
import Artista from './components/Artista'

const BUSCA_FILMES = "https://api.themoviedb.org/3/search/movie?api_key=da22adb3cc84a551b37466aed6d9c7b7&language=en-US&query="
const BUSCAS_SERIES = "https://api.themoviedb.org/3/search/tv?api_key=da22adb3cc84a551b37466aed6d9c7b7&language=en-US&query="
const BUSCAS_ARTISTAS ="https://api.themoviedb.org/3/search/person?api_key=da22adb3cc84a551b37466aed6d9c7b7&language=en-US&query="

var decide;

function App() {
  const [dados, setDados] = useState([]);
  const [buscaFilme, setBuscaFilme] = useState([]);
  const [buscaSerie, setBuscaSerie] = useState([]);
  const [buscaArtista, setBuscaArtista] = useState([]);

  const handleOnSubmitF = (e) =>{
    e.preventDefault();
    decide = "filme";
    fetch(BUSCA_FILMES+buscaFilme)
    .then((res) => res.json())
    .then((data) => {
        console.log(data.results);
        setDados(data.results);
    })
  };

  const handleOnChangeF = (e) =>{
    setBuscaFilme(e.target.value);
  };

  const handleOnSubmitS = (e) =>{
    e.preventDefault();
    decide = "serie";
    fetch(BUSCAS_SERIES+buscaSerie)
    .then((res) => res.json())
    .then((data) => {
        console.log(data.results);
        setDados(data.results);
    })
  };

  const handleOnChangeS = (e) =>{
    setBuscaSerie(e.target.value);
  };

  const handleOnSubmitA = (e) =>{
    e.preventDefault();
    decide = "artista";
    fetch(BUSCAS_ARTISTAS+buscaArtista)
    .then((res) => res.json())
    .then((data) => {
        console.log(data.results);
        setDados(data.results);
    })
  };

  const handleOnChangeA = (e) =>{
    setBuscaArtista(e.target.value);
  };




  return (
<div>
    <header>
        <form onSubmit={handleOnSubmitF}>
          <input className="busca" type="search" placeholder="Buscar Filmes..." 
              value={buscaFilme} onChange={handleOnChangeF}
          />
        </form>

        <form onSubmit={handleOnSubmitS}>
          <input className="busca" type="search" placeholder="Buscar Series..." 
              value={buscaSerie} onChange={handleOnChangeS}
          />
        </form>

        <form onSubmit={handleOnSubmitA}>
          <input className="busca" type="search" placeholder="Buscar Artistas..." 
              value={buscaArtista} onChange={handleOnChangeA}
          />
        </form>

    </header>
    
    
  <div className="filme-container">
      {decide === "filme" && dados.length > 0 &&
       dados.map((filme) => (<Filme  {...filme}/>))}
  </div>

  <div className="filme-container">
      {decide === "serie" && dados.length > 0 &&
       dados.map((serie) => (<Serie  {...serie}/>))}
  </div>

  <div className="filme-container">
      {decide === "artista" && dados.length > 0 &&
       dados.map((artista) => (<Artista  {...artista}/>))}
  </div>

</div>
  );
}

export default App;
