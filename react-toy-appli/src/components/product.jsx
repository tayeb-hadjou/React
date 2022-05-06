import React from 'react';


export default class Product extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    const product = this.props.squares.reduce ( (acc, square) => acc*square.value, 1);

    return (
      <div className="result">
        Le produit est
        <span className="value"> {product}</span>
      </div>
    )
  }

}
