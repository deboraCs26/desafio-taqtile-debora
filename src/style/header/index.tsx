import React from 'react';
import './style.css';
import imageHeader from './image/LOGO.svg'
import { Button } from '../button/button';
import { Separator } from '../separator/separator';
import { MenuItem } from './menu';
import { useLocation, Link } from 'react-router-dom';

export const Menu = () => {
  const location = useLocation();

  return (
    <header>
      <div className='menu-container'>

        <img src={imageHeader} alt='logo' />

        <div className="menu-items-container">
          <ul>
            <MenuItem label='Home' to='/home' isSelected={location.pathname === '/home'} />
            <MenuItem label='Quem Somos' to='/quem-somos' isSelected={location.pathname === '/quem-somos'} />
            <MenuItem label='Contato' to='/contato' isSelected={location.pathname === '/contato'} />
          </ul>
        </div>

        <div className='menu-button-container'>
          <Link to='/Logar' style={{ textDecoration: "none" }}>
            <Button compact variant='secondary' >
              Logar
            </Button>
          </Link>

          <Separator size='small' horizontal />
          <Link to="/Register" style={{ textDecoration: "none" }}>
            <Button compact variant='primary'>Cadastrar</Button>
          </Link>
        </div>
      </div>

    </header>
  );
};
