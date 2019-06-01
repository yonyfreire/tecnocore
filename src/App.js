import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from "./Componentes/Header";
import QuienesSomosSeccion from './Componentes/QuienesSomosSeccion';
import VideoSeccion from "./Componentes/VideoSeccion"
function App() {
  return (
    <div className="App">
      <Header/>
    <QuienesSomosSeccion/>
    <VideoSeccion></VideoSeccion>
    </div>
  );
}

export default App;
