import React from 'react';

import '../assets/style/square.css';

export default class Square extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.handleSquareValueChange(this.props.color);
  }

  render() {
    return (
      <div className="square"
            style = {{backgroundColor : this.props.color}}
            onClick = { this.handleClick }
        >
        { this.props.value }
      </div>
    )
  }

}
