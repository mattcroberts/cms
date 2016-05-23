import React, {PropTypes} from "react";

export default class Blogs extends React.Component {
    render() {
        return <div>BlogsList
      {
        this.props.blogs.map(blog => {
            return <div>blog {blog}</div>;
        })
      },
      <button onClick={this.props.onCreateBlog}>Create Blog</button>
    </div>;
    }
}

Blogs.propTypes = {
    blogs: PropTypes.object,
    onCreateBlog: PropTypes.func
};
