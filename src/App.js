import logo from './Tech.png';
import { HeaderFixo } from "../src/components/Header/header";
import Cards from './components/Cards/Cards';
import './App.css';

function App() {
  return (
    <div className="App">      
      <header className="App-header">
        
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          MobolTech Solutions
        </p>
        <p>
          <Cards></Cards>
        </p>
       
      </header>
    </div>
  );
}

export default App;
