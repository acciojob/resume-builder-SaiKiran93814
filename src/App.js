import React from 'react';

import { useState } from 'react';
import ProfileForm from './components/ProfileForm';
import EducationForm from './components/EducationForm';
import SkillsForm from './components/SkillsForm';
import ProjectsForm from './components/ProjectsForm';
import SocialForm from './components/SocialForm';
import ResumePreview from './components/ResumePreview';

export default function App() {
  const [step, setStep] = useState(0);
  const components = [
    <ProfileForm />, <EducationForm />, <SkillsForm />, <ProjectsForm />, <SocialForm />, <ResumePreview />
  ];

  return (
    <div className="app-container">
      <h1>Resume Generator</h1>
      {components[step]}
      <div className="nav-buttons">
        {step > 0 && <button onClick={() => setStep(step - 1)}>Back</button>}
        {step < components.length - 1 && <button onClick={() => setStep(step + 1)}>Next</button>}
        {step === components.length - 1 && <button onClick={() => alert('Download logic here')}>Download / Preview</button>}
      </div>
    </div>
  );
}

