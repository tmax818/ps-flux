import React, { useState } from "react";
import CourseForm from "./CourseForm";

const ManageCoursePage = (props) => {
  const [course, setCourse] = useState({
    id: null,
    slug: "",
    title: "",
    authorId: null,
    category: "",
  });

  const handleTitleChange = (e) => {
    debugger;
    const updatedCourse = { ...course, title: e.target.value };
    setCourse(updatedCourse);
  };

  return (
    <div>
      <h2>Manage Course</h2>

      <CourseForm course={course} onTitleChange={handleTitleChange} />
    </div>
  );
};

export default ManageCoursePage;
