import React, { useState } from 'react';
import ProfileForm from './components/ProfileForm';
import EducationForm from './components/EducationForm';
import SkillsForm from './components/SkillsForm';
import ProjectsForm from './components/ProjectsForm';
import SocialForm from './components/SocialForm';
import ResumePreview from './components/ResumePreview';

export default function App() {
  const [step, setStep] = useState(0);

  const steps = [
    <ProfileForm key="profile" />,
    <EducationForm key="education" />,
    <SkillsForm key="skills" />,
    <ProjectsForm key="projects" />,
    <SocialForm key="social" />,
    <ResumePreview key="preview" />
  ];

  return (
    <div className="app-container">
      <h1>RESUME GENERATOR</h1>

      <div className="form-section">
        {steps[step]}
      </div>

      <div className="nav-buttons" style={{ marginTop: '20px' }}>
        {step > 0 && (
          <button id="back" onClick={() => setStep(step - 1)}>
            Back
          </button>
        )}

        {step < steps.length - 1 && (
          <button id="next" onClick={() => setStep(step + 1)}>
            Next
          </button>
        )}

        {step === steps.length - 1 && (
          <button id="download" onClick={() => alert('Download logic here')}>
            Download / Preview
          </button>
        )}
      </div>
    </div>
  );
}
