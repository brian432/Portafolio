import { Route, Routes } from 'react-router-dom';
import { Layout } from './componentes/layout/Layout';
import { Home } from './componentes/secciones/Home/Home';
import { Portafolio } from './componentes/secciones/Portafolio/Portafolio';
import { Contacto } from './componentes/secciones/Contacto/Contacto';
import './estilos/estilo.css'
import { useState } from 'react';
function App() {
  const [active, setActive] = useState(false)
  return (
      <Routes>
        <Route path='/' element={<Layout active={active} setActive={setActive} />}>
          <Route index element={<Home active={active}/>} />
          <Route path='/portafolio' element={<Portafolio active={active} />} />
          <Route path='/contacto' element={<Contacto active={active} />} />
        </Route>
      </Routes>
  );
}

export default App;
