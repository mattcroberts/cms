import React from 'react'
import {Link} from 'react-router'

export default class Home extends React.Component {
  render() {
    return <div>Welcome Home
      <Link to="/blogs">blogs</Link>
    </div>
  }
}
