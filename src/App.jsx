
import React, { Component } from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import ColorGameType from './ColorGameType.jsx';
import Home from './Home.jsx';
import StartScreen from './startScreen/StartScreen';
import PageNotFound from './PageNotFound.jsx';
import TextTask from './TextTask';
import Rules from './Rules.jsx';
import MenuBar from './navbar/MenuBar';
import InfoPage from './infoPage/InfoPage'
import About from './About'
import GameTask from './GameTask'

import './App.scss'

class App extends Component {
  render() {
    return (
      <div className='cover'> 
        <BrowserRouter>

          <Routes>
            <Route path="/" element={<StartScreen />} />
            <Route path="/info" element={<InfoPage />} />
            <Route path="/menu" element={<MenuBar />} />
            <Route path="/about" element={<About />} />
            <Route path="/home" element={<Home />} />
            <Route path="/texttask" element={<TextTask />} />
            <Route path="/gametype" element={<ColorGameType />} />
            <Route path="/rules" element={<Rules />} />
            <Route path="/*" element={<PageNotFound />} />
            <Route path="/gametask" element={<GameTask />} />
            {/* <Route path='/admin' element={<Admin />} />  */}
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

{
  /* <Route path="/" element={<Home />} />  */
}

// const sqlite3 = require('sqlite3').verbose()

// // open the database
// let db = new sqlite3.Database('./gamedb.db', sqlite3.OPEN_READWRITE, (err) => {
//   if (err) {
//     console.error(err.message);
//   }
//   console.log('Connected to the chinook database.');
// });

// db.serialize(() => {
//   db.each(`SELECT id as id,
//                   task as task
//            FROM whitegame`, (err, row) => {
//     if (err) {
//       console.error(err.message);
//     }
//     console.log(row.id + "\t" + row.question);
//   });
// });

// db.close((err) => {
//   if (err) {
//     console.error(err.message);
//   }
//   console.log('Close the database connection.');
// });
