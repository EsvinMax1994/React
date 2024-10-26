import logo from './logo.svg';
import './App.css';
import ListaDeNombres from './Components/ListaDeNombres';
import ListaNombres from './Components/ListaNombres';

import Componente from './Components/Componente';

function App() {
  const nombres = ["Esvin", "Max", "Daniel"];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <ListaDeNombres nombres={nombres}></ListaDeNombres>
        <ListaNombres></ListaNombres>
        <Componente></Componente>
      </header>
    </div>
  );
}

export default App;
