import React from 'react';
import { Link } from 'react-router-dom';
import './animate.css';

// import './start.scss'
import './startScreen.scss';

const StartScreen = () => {
  return (
    <div className="baner">
      <div className="baner-conteiner">
        <h1 className="baner-conteiner__head">Заграва</h1>

        <div className="logo"></div>

        <p className="text">ну дуже цікава гра</p>
        <span>
          <Link className="a" to="/info">
            ПОЧАТИ!
          </Link>
        </span>
      </div>
    </div>
  );
};

export default StartScreen;

// <div className="game-box">
//   <div className="start_screen">
//     <h1 className="text_logo">Заграва</h1>

//     <div className="logo"></div>

//     <h3 className="text">ну дуже цікава гра</h3>
//     <span>
//       <Link className="a" to="/info">
//         ПОЧАТИ!
//       </Link>
