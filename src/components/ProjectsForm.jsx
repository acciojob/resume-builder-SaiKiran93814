import React from 'react';

const ProjectsForm = () => {
  return (
    <div>
      <h2>Add your Mini Projects</h2>
      <input name="projectName" placeholder="Project Name" />
      <input name="techStack" placeholder="Tech Stack" />
      <textarea name="description" placeholder="Project Description"></textarea>
      <button id="add_project">Add Project</button>
      {/* <div className="nav-buttons">
        <button id="back">Back</button>
        <button id="next">Next</button>
      </div> */}
    </div>
  );
};

export default ProjectsForm;
