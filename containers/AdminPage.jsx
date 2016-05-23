import React, {PropTypes} from "react";
import {connect} from "react-redux";
import SchemaList from "../components/SchemaList";

export class AdminPage extends React.Component {
    render(){
        return (
      <SchemaList items={this.props.appState.schemas}/>
    );
    }
}

const mapStateToProps = (state) => ({
    appState: {
        schemas: state.schemas
    }
});

const mapDispatchToProps = (dispatch) => ({

});

AdminPage.propTypes = {
    appState: PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminPage);
