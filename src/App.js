import logo from './Tech.png';
import { HeaderFixo } from "../src/components/Header/header";
import './App.css';

function App() {
  return (
    <div className="App">      
      <header className="App-header">
        <HeaderFixo></HeaderFixo>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          MobolTech Solutions
        </p>
        <p>
          PAGINA EM MANUTENÇÃO
        </p>
       
      </header>
    </div>
  );
}

export default App;
