import React, {PropTypes} from "react";

const SchemaListItem = ({item}) => {
    return (
    <li>
      {{item}}
    </li>
  );
};

SchemaListItem.propTypes = {
    item: PropTypes.object
};

export default SchemaListItem;
