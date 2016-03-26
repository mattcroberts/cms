import React from 'react';

export default class Blogs extends React.Component {
  render() {
    return <div>BlogsList
      {
        this.props.blogs.map(blog => {
          return <div>blog</div>
        })
      },
      <button onClick={this.props.onCreateBlog}>Create Blog</button>
    </div>
  }
}
