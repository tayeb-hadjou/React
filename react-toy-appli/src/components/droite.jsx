import React from 'react';
import PropTypes from 'prop-types';

import Square from './square.jsx';

export default class Droite extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    const squares = this.props.squares.map( square => <Square
                                                        { ...square }
                                                        handleSquareValueChange = { this.props.handleSquareValueChange }
                                                        key={ square.color }
                                                     />
                                          );

    const optionSquare = this.props.optionSquare ? <Square color="black" value="0" /> : null;

    return (
      <div className='droite'>
        { squares }
        { optionSquare }
      </div>
    )
  }

  static propTypes = {
    optionSquare : PropTypes.bool
  }
}
