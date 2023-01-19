import React, { Component } from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import ColorGameType from './colorGameType/ColorGameType.jsx';
import Names from './names/Names.jsx';
import StartScreen from './components/baner/StartScreen';
import PageNotFound from './PageNotFound/PageNotFound.jsx';
import TextTask from './Task/TextTask';
import Rules from './navigation/Rules.jsx';
import MenuBar from './navigation/Menu';
import InfoPage from './infoPage/InfoPage';
import About from './navigation/About';
import GameTask from './Task/GameTask';
import Header from './components/header/Header.jsx';
// import Main from './components copy/Main.jsx';

// import DB from './Db'

class App extends Component {
  render() {
    return (
      <div className="">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<StartScreen />} />
            <Route path="/info" element={<InfoPage />} />
            <Route path="/names" element={<Names />} />
            <Route path="/gametype" element={<ColorGameType />} />
            <Route path="/texttask" element={<TextTask />} />

            <Route path="/menu" element={<MenuBar />} />

            <Route path="/about" element={<About />} />
            <Route path="/rules" element={<Rules />} />

            <Route path="/*" element={<PageNotFound />} />

            <Route path="/gametask" element={<GameTask />} />

            {/* <Route path="/db" element={<DB />} /> */}
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
