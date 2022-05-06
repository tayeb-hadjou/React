import React from 'react';


export default class Sum extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    const sum = this.props.squares.reduce ( (acc, square) => acc+square.value, 0);

    return (
      <div className="result">
        La somme des valeurs est
        <span className="value"> {sum}</span>
      </div>
    )
  }

}
