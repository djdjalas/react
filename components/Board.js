import React from 'react';

class Board extends React.Component {
  super(props){
    this.props = props;
  }

  componentWillMount(){
    console.log(this.props)
  }

  render() {
    return (
      <h1>Board</h1>
    );
  }
}

export default Board;
