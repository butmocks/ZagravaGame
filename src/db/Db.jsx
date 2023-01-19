// import TaskDataInput from './TaskDataInput';
// import React, { Component } from 'react';
// // import ShoppingCart from './ShoppingCart.jsx';
// import TaskData from './TaskData';

// import './names.scss';

// class Data extends Component {
//   state = {
//     TaskData: {
//       idData: '',
//     },
//   };

//   handleChange = event => {
//     const { id, value } = event.target;
//     this.setState({
//       TaskData: {
//         ...this.state.TaskDataInput,
//         [id]: value,
//       },
//     });
//   };
//   render() {
//     const { TaskDataInput } = this.state;

//     return (
//       <div className="login-box">
//         <h1 className="text">{`${TaskData.id}`}</h1>

//         <TaskDataInput TaskData={TaskData} handleChange={this.handleChange} />
//       </div>
//     );
//   }
// }
// export default Names;

const sqlite3 = require('sqlite3').verbose();
// const db = new sqlite3.Database('gamedb.db');
// open the database
let db = new sqlite3.Database('./db.sqlite3', (err, row) => {
  if (err) {
    console.log(row.id + ': ' + row.task);
  }
  console.log('Connected to the chinook database.');
});

db.serialize(() => {
  db.each(`SELECT task FROM alltasks WHERE id=5`, (err, row) => {
    if (err) {
      console.error(err.message);
    }
    console.log(row.id + '\t' + row.task);
  });
});

db.close(err => {
  if (err) {
    console.error(err.message);
  }
  console.log('Close the database connection.');
});
