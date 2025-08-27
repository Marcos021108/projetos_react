import './App.css';
import Evento from './components/Evento.js'
import Formulario from './components/Formulari.js';

function App(){

  return (
    <div className="App">
      <h1>Testando Eventos</h1>
      <Evento numero="1"/>
      <Evento numero="2"/>
      <Evento numero="3"/>
      <Formulario/>
    </div>
  );
}

export default App;