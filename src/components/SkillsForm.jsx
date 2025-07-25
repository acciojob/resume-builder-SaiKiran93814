import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { addSkill, deleteSkill } from '../features/skillsSlice';

export default function SkillsForm() {
  const [skill, setSkill] = useState('');
  const dispatch = useDispatch();
  const skills = useSelector(state => state.skills);

  const handleAdd = () => {
    if (skill) {
      dispatch(addSkill(skill));
      setSkill('');
    }
  };

  return (
    <div>
      <h2>Skills Section</h2>
      <input placeholder="Skill" value={skill} onChange={e => setSkill(e.target.value)} />
      <button onClick={handleAdd}>Add Skill</button>
      <ul>
        {skills.map((s, i) => (
          <li key={i}>{s} <button onClick={() => dispatch(deleteSkill(i))}>Delete</button></li>
        ))}
      </ul>
    </div>
  );
}
