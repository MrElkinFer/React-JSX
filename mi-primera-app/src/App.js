import logo from './logo.svg';
import './App.css';
import HolaMundo,{Adios} from './components/HolaMundo'; //solo puedo tener una función por defecto, si voy a llamar una que no sea la función por defecto tengo que llamarla entre orejas
import Saludar from './components/Saludar';
function App() {
  const user = {
    nombre: "Fernando Arismendy",
    edad: 36,
    color: "Azul"

  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Saludar UserInfo= {user} /> 
      </header>
    </div>
  );
}

export default App;
