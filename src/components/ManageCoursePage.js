import React from "react";

const ManageCoursePage = (props) => {
  console.log(props);
  return (
    <div>
      <h2>Manage Course</h2>
      {props.match.params.slug}
    </div>
  );
};

export default ManageCoursePage;
