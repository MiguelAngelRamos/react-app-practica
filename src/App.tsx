import { Navbar } from './components/Navbar';
import './App.css';

function App() {
  return (
    <div className="app-main">
      <Navbar />
      <div className="content">
        <h1>Bienvenido al Modo Oscuro</h1>
        <p>Esta aplicación ha sido desplegada con Jenkins y GitFlow.</p>
      </div>
    </div>
  );
}

export default App;