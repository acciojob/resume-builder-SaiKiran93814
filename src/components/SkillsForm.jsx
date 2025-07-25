import React from 'react';

const SkillsForm = () => {
  return (
    <div>
      <h2>Add your Skills</h2>
      <input name="skill" placeholder="Enter a skill" /> {/* EXACT name */}
      <button id="add_skill">Add Skill</button>
      <div className="nav-buttons">
        <button id="back">Back</button>
        <button id="next">Next</button>
      </div>
    </div>
  );
};

export default SkillsForm;
