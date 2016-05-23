import {connect} from "react-redux";
import BlogsList from "../components/Blogs";
import {create} from "../actions/blog";

const allBlogs = (state) => ({blogs: state.blogs});
const mapDispatchToProps = (dispatch) => ({
    onCreateBlog: () => dispatch(create())
});
const AllBlogs = connect(allBlogs, mapDispatchToProps)(BlogsList);

export default AllBlogs;
