import React from 'react';

export default class Login extends React.Component {
  render() {
    return <form>
      <input placeholder="Username"/>
      <input placeholder="Password"/>
      <button type="submit">Login</button>
    </form>
  }
}
