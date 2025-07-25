import React, { useState } from 'react';
import Button from '@mui/material/Button';

const EducationForm = () => {
  const [courseName, setCourseName] = useState('');
  const [completionYear, setCompletionYear] = useState('');
  const [college, setCollege] = useState('');
  const [percentage, setPercentage] = useState('');

  const handleAdd = () => {
    // You can dispatch Redux or log to console for now
    console.log({
      courseName,
      completionYear,
      college,
      percentage,
    });

    // Clear form
    setCourseName('');
    setCompletionYear('');
    setCollege('');
    setPercentage('');
  };

  return (
    <div>
      <h2>Add your Education Details</h2>

      <input
        name="courseName"
        placeholder="Course Name"
        value={courseName}
        onChange={(e) => setCourseName(e.target.value.toString())}
      />
      <input
        name="completionYear"
        placeholder="Completion Year"
        value={completionYear}
        onChange={(e) => setCompletionYear(e.target.value.toString())}
      />
      <input
        name="college"
        placeholder="College"
        value={college}
        onChange={(e) => setCollege(e.target.value.toString())}
      />
      <input
        name="percentage"
        placeholder="Percentage"
        value={percentage}
        onChange={(e) => setPercentage(e.target.value.toString())}
      />

      <div style={{ marginTop: '10px' }}>
        <Button
          id="add_education"
          variant="contained"
          color="primary"
          onClick={handleAdd}
        >
          Add Education
        </Button>
      </div>
    </div>
  );
};

export default EducationForm;
