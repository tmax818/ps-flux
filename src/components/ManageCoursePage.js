import React from "react";
import { Prompt } from "react-router-dom";

const ManageCoursePage = (props) => {
  console.log(props);
  return (
    <div>
      <h2>Manage Course</h2>
      <Prompt when={true} message="what???" />
      {props.match.params.slug}
    </div>
  );
};

export default ManageCoursePage;
