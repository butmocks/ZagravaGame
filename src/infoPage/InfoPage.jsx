import React from 'react';
import { Link } from 'react-router-dom';
import './infoPage.scss'
import MenuBar from '../navigation/Menu';



const InfoPage = () => {
  return (
    
    <div className="info">
      <MenuBar />
      <div className="text">
        <h1 >Цікавий факт</h1>
        </div>
        <div className="text" >
        
        Якщо довго не займатися сексом, зменшується пеніс Вчені довели, що нормальний розмір
        статевого члена буде лише тоді, коли він функціонує повноцінно. А це можливе лише під час
        сексу.

      </div>
      

        <Link className="a" to="/names">Далі</Link>

    </div>
  );
};

export default InfoPage;
