import React from 'react';

const EducationForm = () => {
  return (
    <div>
      <h2>Add your Education Details</h2>
      <input name="courseName" placeholder="Course Name" />
      <input name="completionYear" placeholder="Completion Year" />
      <input name="college" placeholder="College" />
      <input name="percentage" placeholder="Percentage" />
      <button id="add_education">Add Education</button>
      <div className="nav-buttons">
        <button id="back">Back</button>
        <button id="next">Next</button>
      </div>
    </div>
  );
};

export default EducationForm;
