import React from 'react';
import { Link } from 'react-router-dom';

import GameTask from './GameTask.jsx';
import ColorGameType from './ColorGameType.jsx'



class TextTask extends React.Component {

  
  state = {
  
  };



  
  componentDidMount() {
    this.fetchTask(this.props.task);
  }
  
  
// taskId = (Math.floor(Math.random() * 50))

  fetchTask = () => {
    fetch(`http://localhost:3000/red/${(Math.floor(Math.random() * 200))}`)
      .then(response => response.json())
      .then(taskData => {
        this.setState({
          taskData,
        });
      });
  };
  render() {
    return (
      <div>


          <GameTask taskData={this.state.taskData} />


          
     
      <button className="btn" type="refresh" onClick={() => this.setText()}>
      Далі
      </button>

      <button className="btn">
        <Link to="/" >На головну</Link>
      </button>

      <button className="btn">
         <Link to="/gametype">Вибір режиму гри</Link>
      </button>

      </div>
      
    );
  }
}

export default TextTask;