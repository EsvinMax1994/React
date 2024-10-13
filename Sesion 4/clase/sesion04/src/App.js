import logo from './logo.svg';
import './App.css';
import { MiprimerEstado } from './components/MiprimerEstado';
import { Contador } from './components/Contador';
import { PruebaComponent } from './components/PruebaComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hook - useState</h1>
        <MiprimerEstado></MiprimerEstado>
        <PruebaComponent></PruebaComponent>
        <Contador></Contador>
      </header>
    </div>
  );
}

export default App;
