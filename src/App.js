import { Routes, Route } from 'react-router-dom';
import './App.css';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import CadastroEnergiaGerada from './pages/CadastroEnergiaGerada';
import UnidadeConsumidora from './pages/UnidadeConsumidora';
import CadastroUnidadeConsumidora from './pages/CadastroUnidadeConsumidora';


function App() {
  return (
    <>

    
    <Routes>
      <Route path='/' element={<Login/>} />
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/unidadeconsumidora' element={<UnidadeConsumidora/>}/>
      <Route path='/cadastrounidadeconsumidora' element={<CadastroUnidadeConsumidora/>}/>
      <Route path='/cadastroenergia' element={<CadastroEnergiaGerada/>}/>
    </Routes>
    
    </>
    
  );
}

export default App;
