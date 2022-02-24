import Header from './header/Header';
import Menu from './menu/Menu';
import { Outlet } from 'react-router-dom';

const Layout = ({active, setActive}) => {
  return (
    <div className={`container ${active ? 'active' : ''}`}>
      <Header active={active} setActive={setActive} />
      <div className="main-container">
        <div className='main'>
          <div className="content">
            <div className="overlay">
              <Outlet/>
            </div>
          </div>
        </div>
      </div>
      <Menu active={active} setActive={setActive} />
    </div>
  )
}

export default Layout;

