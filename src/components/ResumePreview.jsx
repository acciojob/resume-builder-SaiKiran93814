
import React from 'react';
import { useSelector } from 'react-redux';

export default function ResumePreview() {
  const { fname, lname, phone, address } = useSelector(state => state.profile);
  const education = useSelector(state => state.education);
  const skills = useSelector(state => state.skills);
  const projects = useSelector(state => state.projects);
  const social = useSelector(state => state.social);

  return (
    <div>
      <h1>{fname} {lname}</h1>
      <p>Address: {address}</p>
      <p>Phone Number: {phone}</p>

      <h2>Education</h2>
      {education.map((edu, i) => (
        <div key={i}>
          <p>{edu.courseName} at {edu.college} ({edu.completionYear}) - {edu.percentage}%</p>
        </div>
      ))}

      <h2>Skills</h2>
      <ul>{skills.map((s, i) => <li key={i}>{s}</li>)}</ul>

      <h2>Projects</h2>
      {projects.map((p, i) => (
        <div key={i}>
          <p><strong>{p.projectName}</strong>: {p.description} (Tech: {p.techStack})</p>
        </div>
      ))}

      <h2>Social Links</h2>
      <ul>{social.map((s, i) => <li key={i}><a href={s} target="_blank" rel="noopener noreferrer">{s}</a></li>)}</ul>
    </div>
  );
}