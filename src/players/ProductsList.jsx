import React, { Component } from 'react';

class ProductsList extends Component {
  render() {
    const total = this.props.cartItems.reduce((acc, item) => acc + item.price, 0);

    return (
      <div>
        <ul>
          {this.props.cartItems.map(({ id, name, price }) => (
            <li key={id}>
              <span>{name}</span>
              <span>{`$${price}`}</span>
            </li>
          ))}
        </ul>
        <div>{`Total: $${total}`}</div>
      </div>
    );
  }
}

export default ProductsList;
