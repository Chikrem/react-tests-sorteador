// Início Aula-2

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Card from './componentes/Card';
import Formulario from './componentes/Formulario';
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path='/' element={<Card><Formulario /></Card>}/>
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
