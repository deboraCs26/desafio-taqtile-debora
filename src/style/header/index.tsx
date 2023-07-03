import React from 'react';
import './style.css';
import imageHeader from './image/LOGO.svg'
import { Label } from '../typography/LargeLabel';
import { Button } from '../button/button';
import { Separator } from '../separator/separator';
import { ComponentizationMenu } from './menu';

export const Menu = () => {
  return (
    <header>
      <div className='container'>
        <div>
          <img src={imageHeader} alt='logo' />
        </div>

        <div className="menu">
          <ul>
            <ComponentizationMenu label='Home' />
            <li><Label weight='bold' color='Xdark'>Quem Somos</Label></li>
            <li><Label weight='bold' color='Xdark'>Contato</Label></li>
          </ul>
        </div>

        <div className='menu-button'>
          <Button variant='secondary' compact>
            Logar
          </Button>

          <Separator size='small' horizontal={true} />
          <Button variant='primary' compact>
            Cadastrar
          </Button>
        </div>
      </div>

    </header>
  );
};
