import { Routes, Route } from 'react-router-dom';
import './App.css';

import Login from './pages/Login';
import Menu from './components/Menu';
import Dashboard from './pages/Dashboard';
import CadastroEnergiaGerada from './pages/CadastroEnergiaGerada';


function App() {
  return (
    <>

    
    <Routes>
      <Route path='/' element={<Login/>} />
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/cadastroenergia' element={<CadastroEnergiaGerada/>}/>
    </Routes>
    
    </>
    
  );
}

export default App;
