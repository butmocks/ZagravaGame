import React from 'react';
import { Link } from 'react-router-dom';

import './pageNotFound.scss'


const PageNotFound = () => {
  return (
    <div className="">
      <button>
        <Link to="/menu">MENU</Link>
      </button>
      <div className='not_found'>404</div>


      <button className='btn'>
      <Link to="/">На головну</Link>
      </button>
    </div>
  );
};

export default PageNotFound;
