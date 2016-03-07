import React  from 'react'

export default class Login extends React.Component {

  onSubmit(e) {
    e.preventDefault();
    this.props.history.push('/');
  }

  render() {
    return <form onSubmit={this.onSubmit.bind(this)}>
      <input placeholder="Username"/>
      <input placeholder="Password"/>
      <button type="submit">Login</button>
    </form>
  }
}
