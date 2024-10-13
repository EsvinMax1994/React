import logo from './logo.svg';
import './App.css';
import MiComponente from './MiComponente';
import { SegundoComponente } from './SegundoComponente';
import { TercerComponente } from './TercerComponente';
import { EventosComponente } from './EventosComponente';


function App() {
  const fichaMedica = {grupoSanguineo: "O+", alergia: "ninguna", estatura:1.60, IMC:30.8}
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <hr/>
        <EventosComponente></EventosComponente>
        <hr/>  
      <MiComponente></MiComponente>
      <hr/>
      <SegundoComponente></SegundoComponente>
      <hr/>
      <TercerComponente nombre="Esvin" apellido="Lezana" ficha={fichaMedica}></TercerComponente>
      
      </header>
    </div>
  );
}


export default App;
