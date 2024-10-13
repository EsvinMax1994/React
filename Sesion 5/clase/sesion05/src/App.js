import logo from './logo.svg';
import './App.css';
import { NombresComponente } from './components/NombresComponente';
import { MisJuegos } from './components/MisJuegos';
import FormularioValidado from './components/FornularioValidados';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      <FormularioValidado></FormularioValidado>
      <br></br>
      <NombresComponente></NombresComponente>
      <MisJuegos></MisJuegos>
      </header>
    </div>
  );
}

export default App;
