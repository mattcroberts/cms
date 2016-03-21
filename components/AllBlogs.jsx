import { connect } from 'react-redux';
import BlogsList from './Blogs';

const allBlogs = (state) => { blogs: state.blogs };

const AllBlogs = connect(
  allBlogs
)(BlogsList);
