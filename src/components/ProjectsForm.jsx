import React, { useState } from 'react';
import Button from '@mui/material/Button';

const ProjectsForm = () => {
  const [projectName, setProjectName] = useState('');
  const [techStack, setTechStack] = useState('');
  const [description, setDescription] = useState('');

  return (
    <div>
      <h2>Add your Mini Projects</h2>

      <input
        name="projectName"
        placeholder="Project Name"
        value={projectName}
        onChange={(e) => setProjectName(e.target.value.toString())}
      />

      <input
        name="techStack"
        placeholder="Tech Stack"
        value={techStack}
        onChange={(e) => setTechStack(e.target.value.toString())}
      />

      <textarea
        name="description"
        placeholder="Project Description"
        value={description}
        onChange={(e) => setDescription(e.target.value.toString())}
      />

      <Button id="add_project" variant="contained" color="primary">
        Add Project
      </Button>
    </div>
  );
};

export default ProjectsForm;
