import React from "react";
import CourseForm from "./CourseForm";

const ManageCoursePage = (props) => {
  console.log(props);
  return (
    <div>
      <h2>Manage Course</h2>
      {/* <Prompt when={true} message="what???" /> */}
      {props.match.params.slug}
      <CourseForm />
    </div>
  );
};

export default ManageCoursePage;
