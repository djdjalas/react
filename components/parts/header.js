import React from 'react';

var Header  = React.createClass ({

  propTypes : {
    title: React.PropTypes.string.isRequired
  },

  getDefaultProps(){
    return {
      status : 'disconnected'
    }
  },

  render() {
    return (
      <header className = "row">
        <div>

          <div className = "col-xs-10">
            <h1>{ this.props.title } </h1>
          </div>

          <div className = "col-xs-2">
            <span id ="connected-status" className = {this.props.status}>{this.props.status}</span>
          </div>

        </div>
      </header>
    )
  }

});

module.exports =  Header;
