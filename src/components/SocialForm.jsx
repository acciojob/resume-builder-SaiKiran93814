import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
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
      <h2>Social Media Section</h2>
      <input placeholder="Social Link" value={social} onChange={e => setSocial(e.target.value)} />
      <button onClick={handleAdd}>Add Social</button>
      <ul>
        {socialLinks.map((s, i) => (
          <li key={i}>{s} <button onClick={() => dispatch(deleteSocial(i))}>Delete</button></li>
        ))}
      </ul>
    </div>
  );
}
