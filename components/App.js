import React from 'react';
import io from 'socket.io-client';
import Header from './parts/header'
import { RouteHandler } from 'react-router';

export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      status : 'disconnected',
      title : ''
    }
    this.connect = this.connect.bind(this);
    this.disconnect = this.disconnect.bind(this);
    this.welcome = this.welcome.bind(this);
  }

  componentWillMount() {
    this.socket = io('http://localhost:3000/');
    this.socket.on('connect', this.connect);
    this.socket.on('disconnect', this.disconnect);
    this.socket.on('welcome', this.welcome)
  }

  welcome(state){
    this.setState({
      title : state.title
    })
  }

  disconnect() {
    console.log(`you are disconnected with socket id : ${this.socket.id}`);
    this.setState({
      status : 'disconnected'
    })
  }

  connect() {
    console.log(`you are connected with socket id : ${this.socket.id}`);
    this.setState({
      status : 'connected'
    })
  }

  render() {
    return (
      <div>
        <Header title = {this.state.title} status = { this.state.status } />
        {this.props.children}
      </div>
    );
  }
}
