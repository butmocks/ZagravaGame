import React from 'react';
import { Link } from 'react-router-dom';
import './animate.css';

import './startscreen.scss'

const StartScreen = () => {
  return (
    <div className="startscreen">
      <div className='adults'></div>
      <div className="logo"></div>
      <div className="text_logo">Заграва</div>
      <div className="text">ну дуже цікава гра</div>
      <button className="btn_start">
        <Link to="/info">Далі</Link>
      </button>
    </div>
  );
};





export default StartScreen;

{/* <div class="container">
<div class="bg-box">
  { Кодимо } солов'їною 
</div>
</div> */}
