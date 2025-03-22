import {BrowserRouter, Routes, Route} from 'react-router';
import PaginaPrincipal from './components/paginaPrincipal';
import Contato from './components/contato';
import Sobre from './components/sobre';
import Menu from './components/menu';

function App() {

  return (
    <>
      <BrowserRouter>
      <Menu />
        <Routes>
          <Route index element={<PaginaPrincipal/>}/>
          <Route path="/contato" element={<Contato/>}/>
          <Route path="/sobre" element={<Sobre/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
