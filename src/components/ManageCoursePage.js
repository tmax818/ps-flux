import React, { useState } from "react";
import CourseForm from "./CourseForm";
import * as courseApi from '../api/courseApi';

const ManageCoursePage = (props) => {
  const [course, setCourse] = useState({
    id: null,
    slug: "",
    title: "",
    authorId: null,
    category: "",
  });

  const handleChange = (e) => {
    setCourse({ ...course, [e.target.name]: e.target.value });
  };

  function handleSubmit(e) {
    e.preventDefault();
    courseApi.saveCourse(course)

  }

  return (
    <div>
      <h2>Manage Course</h2>

      <CourseForm course={course} onChange={handleChange} onSubmit={handleSubmit} />
    </div>
  );
};

export default ManageCoursePage;
