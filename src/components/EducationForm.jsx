import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { addEducation, deleteEducation } from '../features/educationSlice';

export default function EducationForm() {
  const [edu, setEdu] = useState({ courseName: '', completionYear: '', college: '', percentage: '' });
  const dispatch = useDispatch();
  const education = useSelector(state => state.education);

  const handleAdd = () => {
    dispatch(addEducation(edu));
    setEdu({ courseName: '', completionYear: '', college: '', percentage: '' });
  };

  return (
    <div>
     <h2>Add your Education Details</h2>
      <input placeholder="Course Name" value={edu.courseName} onChange={e => setEdu({ ...edu, courseName: e.target.value })} />
      <input placeholder="Completion Year" value={edu.completionYear} onChange={e => setEdu({ ...edu, completionYear: e.target.value })} />
      <input placeholder="College" value={edu.college} onChange={e => setEdu({ ...edu, college: e.target.value })} />
      <input placeholder="Percentage" value={edu.percentage} onChange={e => setEdu({ ...edu, percentage: e.target.value })} />
      <button onClick={handleAdd}>Add Education</button>
      <ul>
        {education.map((item, index) => (
          <li key={index}>{item.courseName} - {item.college} <button onClick={() => dispatch(deleteEducation(index))}>Delete</button></li>
        ))}
      </ul>
    </div>
  );
}