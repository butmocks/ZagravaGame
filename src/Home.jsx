import React, { Component } from 'react';
// import ShoppingCart from './ShoppingCart.jsx';
import Profile from './players/Profile.jsx';
import { Link } from 'react-router-dom';

class Home extends Component {
  state = {
    userData: {
      guyName: 'Хлопцю',
      girlName: 'Дівчина',
    },
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      userData: {
        ...this.state.userData,
        [name]: value,
      },
    });
  };
  render() {
    const { userData } = this.state;

    return (
      <div className="page page__content">
        <button>
          <Link to="/menu">MENU</Link>
        </button>
        <h1 className="title">{`Вітаю у грі Заграва, ${userData.guyName} та ${userData.girlName}`}</h1>
        <h2>Додайте свої імена</h2>
        <main className="content">
          <Profile userData={userData} handleChange={this.handleChange} />
        </main>

        <button className="btn">
          <Link to="/gametype">Обрати режим гри</Link>
        </button>
        <button className="btn">
          <Link to="/rules">Правила</Link>
        </button>
        {/* <button>
          <Link to="/start">Почати гру</Link>

        </button> */}
      </div>
    );
  }
}
export default Home;
