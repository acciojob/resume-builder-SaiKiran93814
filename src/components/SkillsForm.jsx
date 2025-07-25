import React, { useState } from 'react';

const SkillsForm = () => {
  const [skill, setSkill] = useState('');

  return (
    <div>
      <h2>Add your Skills</h2>
      <input
        type="text"
        value={skill}
        name="skill" // This is used for Cypress test
        placeholder="Enter a skill"
        onChange={(e) => setSkill(e.target.value)}
      />
      <button id="add_skill">Add Skill</button>
    </div>
  );
};

export default SkillsForm;
