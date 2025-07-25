import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { addProject, deleteProject } from '../features/projectsSlice';

export default function ProjectsForm() {
  const [project, setProject] = useState({ projectName: '', techStack: '', description: '' });
  const dispatch = useDispatch();
  const projects = useSelector(state => state.projects);

  const handleAdd = () => {
    dispatch(addProject(project));
    setProject({ projectName: '', techStack: '', description: '' });
  };

  return (
    <div>
      <h2>Mini Project Section</h2>
      <input placeholder="Project Name" value={project.projectName} onChange={e => setProject({ ...project, projectName: e.target.value })} />
      <input placeholder="Tech Stack" value={project.techStack} onChange={e => setProject({ ...project, techStack: e.target.value })} />
      <input placeholder="Description" value={project.description} onChange={e => setProject({ ...project, description: e.target.value })} />
      <button onClick={handleAdd}>Add Project</button>
      <ul>
        {projects.map((p, i) => (
          <li key={i}>{p.projectName} - {p.techStack} <button onClick={() => dispatch(deleteProject(i))}>Delete</button></li>
        ))}
      </ul>
    </div>
  );
}
