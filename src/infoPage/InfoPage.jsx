import React from 'react';
import { Link } from 'react-router-dom';
// import './infoPage.scss'

const InfoPage = () => {
  return (
    <div className="">
      <h1>Цікавий факт</h1>


      <text>
        
        Якщо довго не займатися сексом, зменшується пеніс Вчені довели, що нормальний розмір
        статевого члена буде лише тоді, коли він функціонує повноцінно. А це можливе лише під час
        сексу.
      </text>
      <button>
        <Link to="/home">Далі</Link>
      </button>
    </div>
  );
};

export default InfoPage;
