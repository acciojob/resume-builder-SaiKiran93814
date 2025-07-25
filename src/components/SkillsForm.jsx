import React, { useState } from 'react';
import Button from '@mui/material/Button';

const SkillsForm = () => {
  const [skill, setSkill] = useState('');

  return (
    <div>
      <h2>Add your Skills</h2>
      <input
        type="text"
        name="skill"
        placeholder="Enter a skill"
        value={skill}
        onChange={(e) => setSkill(e.target.value.toString())}
      />
      <Button id="add_skill" variant="contained">Add Skill</Button>
    </div>
  );
};

export default SkillsForm;
