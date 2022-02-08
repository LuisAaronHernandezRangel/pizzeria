import logo from './logo.svg';
import './App.css';
import Tarjeta from './components/card';
import pizza from './muzza.PNG';
import Breadcrumb from './components/breadcrumb';
import Minicard from './components/minicard';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Pizzas from './pages/Pizzas'
import Empanadas from './pages/Empanadas'
import Bebidas from './pages/Bebidas'
import Header from './components/header'

function App() {
  const imagen=pizza
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Pizzas/>}/>
        <Route path="/empanadas" element={<Empanadas/>}/>
        <Route path="/bebidas" element={<Bebidas/>}/>
        
      </Routes>
    </Router>
  );
}

export default App;
