import React from 'react';

import '../assets/style/gauche.css';

import Sum from './sum.jsx';
import Product from './product.jsx';

export default class Gauche extends React.Component {

  constructor(props) {
    super(props);

    this.state = { plus : true };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState ( (prevState) => ({ plus : ! prevState.plus}) );
  }

  render() {
    const operatorComponent = this.state.plus ? <Sum {...this.props} /> : <Product {...this.props} /> ;

    return (
      <div className='gauche'>
        <button
          onClick= { this.handleClick }
        >
          { this.state.plus ? 'x' : '+'}
        </button>
        { operatorComponent }
      </div>
    )
  }

}
