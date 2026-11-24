import { NavLink, useLocation } from 'react-router-dom';
import NestedList from './NestedList';
import { useEffect } from 'react';
import AuthIcon from './Icons/AuthIcon';
import FavoritesIcon from './Icons/FavoritesIcon';

export default function Navigation({ menu, setMenu }) {


  const location = useLocation().pathname

  useEffect(() => {
    return () => {
      setMenu({ open: false, backdrop: false, nested: false })
    }
  }, [location])

  return (
    <div className='navigation' style={{ left: menu.open ? '0' : '-100%' }}>
      <div className='mobile-header row center-y s-between'>
        <div className={`menu-bars ${menu.open ? 'active' : 'inactive'}`} onClick={() => setMenu({ open: false, backdrop: false })}>
          <div></div>
          <div></div>
        </div>
        <div className='icons row gap-25'>
          <AuthIcon />
          <FavoritesIcon />
        </div>
      </div>
      <nav className='row center-x'>
        <ul className='row gap-70 text-main xsmall-text text-black up-case'>
          <NestedList setMenu={setMenu} menu={menu} />
          <li>
            <NavLink
              to={'news'}>News</NavLink>
          </li>
          <li>
            <NavLink
              to={'about'}>About</NavLink>
          </li>
          <li>
            <NavLink
              to={'reviews'}
            >Reviews</NavLink>
          </li>
          <li>
            <NavLink
              to={'contacts'}
            >Contact</NavLink>
          </li>
        </ul>
      </nav>
      <div className='column gap-5'>
        <a href="tel:+27110000000" className='text-main text-black xxxsmall-text'>+27 11 000 0000</a>
        <a href="tel:+27100000000" className='text-main text-black xxxsmall-text'>+27 10 000 0000</a>
      </div>
    </div>
  );
}
