// Início Aula-3

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Configuracao from './Paginas/Configuração';

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path='/' element={<Configuracao />}/>
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}
export default App;
