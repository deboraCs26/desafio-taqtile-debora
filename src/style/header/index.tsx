import React from 'react';
import './style.css';
import imageHeader from './image/LOGO.svg'
import { Button } from '../button/button';
import { Separator } from '../separator/separator';
import { MenuItem } from './menu';

export const Menu = () => {
  return (
    <header>
      <div className='menu-container'>

        <img src={imageHeader} alt='logo' />

        <div className="menu-items-container">
          <ul>
            <MenuItem label='Home' />
            <MenuItem label='Quem Somos' />
            <MenuItem label='Contato' />
          </ul>
        </div>

        <div className='menu-button-container'>
            <Button compact variant='secondary' >
              Logar
            </Button>
          <Separator size='small' horizontal />
          <Button compact variant='primary'>Cadastrar</Button>
        </div>
      </div>

    </header>
  );
};
