import React, { useState } from "react";
import CourseForm from "./CourseForm";
import * as courseApi from '../api/courseApi';
import {toast, ToastContent} from 'react-toastify'

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
    props.history.push("/courses")
    toast.success("Course saved!!")

  }

  return (
    <div>
      <h2>Manage Course</h2>

      <CourseForm course={course} onChange={handleChange} onSubmit={handleSubmit} />
    </div>
  );
};

export default ManageCoursePage;
