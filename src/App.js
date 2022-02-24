import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './componentes/Layout'
import Home from './componentes/secciones/Home/Home';
import Portafolio from './componentes/secciones/Portafolio/Portafolio';
import Contact from './componentes/secciones/Contacto/Contact';
import './estilos/estilo.css'
import { useState } from 'react';
function App() {
  const [active, setActive] = useState(false)
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/portafolio/' element={<Layout active={active} setActive={setActive} />}>
          <Route index element={<Home active={active}/>} />
          <Route path='/portafolio/portafolio' element={<Portafolio active={active} />} />
          <Route path='/portafolio/contacto' element={<Contact active={active} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
