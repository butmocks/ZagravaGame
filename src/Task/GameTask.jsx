import React, { Component } from 'react';
import { Link, useState } from 'react-router-dom';

class GameTask extends React.Component {







  render() {
    const { taskData } = this.props;
    if (!taskData) {
      return null;
    }
    const { img, task, level, id, active } = taskData;
    return (
      <form>

        <h2 className="">Завдання №{id}</h2>
        <img src="../src/db-repack" className="">
        {img}
        </img>

        <div className="text">{task}</div>

        {/* <div className="">{level}</div> */}
        {/* <div className="">{active}</div> */}
      </form>
     
    )

  }
}
export default GameTask;

// render() {
//   return (

//     <div className="page page__content">
//       {/* <div className="cart-title">{`${userData}, твій хід`}</div> */}

//       <h3>наприклад</h3>
//       <p>Раптом чомусь вийшло, що на одному з партнерів залишилося більше одягу!?
//         З метою більшої справедливості роздягнений знімає одну частину одягу з другого гравця і замінює один жовтий фант на рожевий у колоді.</p>
//       <button className="btn" onClick={() => this.setText()}>
//         Text 1
//       </button>
//       <button className="btn" type='refresh'>Виконано</button>
//       {/* <button className='resetButton' type="refresh" onClick={resetRadioState}>Замінити завдання</button> */}

//       <button className="btn" type="refresh">Замінити завдання</button>

//       {/* <button className='resetButton' type="refresh" onClick={resetRadioState}>Замінити завдання</button> */}

//       <button className="btn">
//         <Link to="/" >На головну</Link>
//       </button>
//       <button className="btn">
//         <Link to="/gametype">Вибір режиму гри</Link>
//       </button>

//     </div>
//   );
// };
