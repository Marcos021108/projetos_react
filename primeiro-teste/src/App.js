import './App.css';
import HelloWorld from './components/HelloWorld';
import Frase from './components/Frase';
import DigaMeuNome from './components/DigaMeuNome';

function App(){

  const nome = "Claudin"

  return (
    <div className="App">
      <h1>MEU APP REACT</h1>
      <HelloWorld/>
      <Frase />
      <DigaMeuNome nome= "Cleiton"/>
      <DigaMeuNome nome= "Kleberiano"/>
      <DigaMeuNome nome= {nome}/>

    </div>
  );
}

export default App;