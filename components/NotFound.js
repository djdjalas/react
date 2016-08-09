import { Link } from 'react-router';
import React from 'react';

export default class NotFound extends React.Component {
  render() {
    return (
      <div>
        <h1>Not found</h1>
        <Link to = "/" >Back to home page</Link>
      </div>
    );
  }
}
