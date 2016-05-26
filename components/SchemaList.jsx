import React, {PropTypes} from "react";
import SchemaListItem from "./SchemaListItem";

const SchemaList = ({items}) => {
    return (
    <ul>
      {Object.keys(items).map(function(item, i) {<SchemaListItem item={item} key={i}/>;})}
    </ul>
  );
};

SchemaList.propTypes = {
    items: PropTypes.object
};

export default SchemaList;
