import { Routes, Route } from 'react-router-dom';
import './App.css';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import CadastroEnergiaGerada from './pages/CadastroEnergiaGerada';
import UnidadeConsumidora from './pages/UnidadeConsumidora';
import CadastroUnidadeConsumidora from './pages/CadastroUnidadeConsumidora';
import EditUnidadeConsumidora from './pages/EditUnidadeConsumidora';
import Menu from './components/Menu'

import {UnidadeConsumidoraProvider} from './contexts/UnidadeConsumidora'


function App() {
  return (
    <>

    <UnidadeConsumidoraProvider>
    
    
    <Routes>
      <Route path='/' element={<Login/>} />
      <Route path='/dashboard' element={<><Menu/><Dashboard/></>}/>
      <Route path='/unidadeconsumidora' element={<><Menu/><UnidadeConsumidora/></>}/>
      <Route path='/cadastrounidadeconsumidora' element={<><Menu/><CadastroUnidadeConsumidora/></>}/>
      <Route path='/editarunidadeconsumidora' element={<><Menu/><EditUnidadeConsumidora/></>}/>
      <Route path='/cadastroenergia' element={<><Menu/><CadastroEnergiaGerada/></>}/>
    </Routes>
    </UnidadeConsumidoraProvider>
    
    </>
    
  );
}

export default App;
