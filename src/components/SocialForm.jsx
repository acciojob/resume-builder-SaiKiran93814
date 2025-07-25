import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addSocial, deleteSocial } from '../features/socialSlice';

export default function SocialForm() {
  const [social, setSocial] = useState('');
  const dispatch = useDispatch();
  const socialLinks = useSelector(state => state.social);

  const handleAdd = () => {
    if (social) {
      dispatch(addSocial(social));
      setSocial('');
    }
  };

  return (
    <div>
      <h2>Add your Social Media Links</h2>
      {/* ✅ ADD name="Social" to match Cypress */}
      <input
      type='text'
        name="Social" 
        placeholder="Social Links"
        value={social}
        onChange={e => setSocial(e.target.value)}
      />
      <button id="add_social" onClick={handleAdd}>ADD SOCIAL</button>
      <ul>
        {socialLinks.map((s, i) => (
          <li key={i}>
            {s} 
            <button onClick={() => dispatch(deleteSocial(i))}>DELETE SOCIAL</button>
          </li>
        ))}
      </ul>
      {/* ✅ ADD navigation buttons to match other form steps */}
      <div className="nav-buttons">
        <button id="back">Back</button>
        <button id="next">Next</button>
      </div>
    </div>
  );
}
