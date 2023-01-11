import React from 'react';
import { Link } from 'react-router-dom';
import './menu.scss';
// import userData from '../names/Names'
// import { Component } from 'react';

// {`Привіт ${userData.guyName}`}

const MenuBar = ( ) => {
    
  return (

    <div>
      <label for="toggle">❔</label>
      <input type="checkbox" id="toggle" />
      <aside>
        <h2>Меню</h2>

<div>

</div>
        <ul>
                     <li>
              <Link className="" to="/">
                Головна
              </Link>
            </li>
            <li>
        
              <Link className="" to="/rules">
                Правила
              </Link>
            </li>
            <li>
       
              <Link className="" to="/about">
                Про гру
              </Link>
            </li>

            <li>
     
              <Link className="" to="/">
                Кабінет
              </Link>
            </li>

            <li>

              <Link className="" to="/gametype">
                Вибір складності
              </Link>
            </li>

            <li>

              <Link className="" to="/gametype">
                Вибір гри
              </Link>
            </li>
        </ul>
      </aside>
    </div>
  );
};

export default MenuBar