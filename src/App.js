import { Routes, Route } from 'react-router-dom';
import './App.css';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import CadastroEnergiaGerada from './pages/CadastroEnergiaGerada';
import UnidadeConsumidora from './pages/UnidadeConsumidora';
import CadastroUnidadeConsumidora from './pages/CadastroUnidadeConsumidora';
import EditUnidadeConsumidora from './pages/EditUnidadeConsumidora';

import {UnidadeConsumidoraProvider} from './contexts/UnidadeConsumidora'


function App() {
  return (
    <>

    <UnidadeConsumidoraProvider>
    <Routes>
      <Route path='/' element={<Login/>} />
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/unidadeconsumidora' element={<UnidadeConsumidora/>}/>
      <Route path='/cadastrounidadeconsumidora' element={<CadastroUnidadeConsumidora/>}/>
      <Route path='/editarunidadeconsumidora' element={<EditUnidadeConsumidora/>}/>
      <Route path='/cadastroenergia' element={<CadastroEnergiaGerada/>}/>
    </Routes>
    </UnidadeConsumidoraProvider>
    
    </>
    
  );
}

export default App;
