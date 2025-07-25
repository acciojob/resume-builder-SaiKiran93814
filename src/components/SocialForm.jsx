import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addSocial, deleteSocial } from '../features/socialSlice';
import Button from '@mui/material/Button';

export default function SocialForm() {
  const [social, setSocial] = useState('');
  const dispatch = useDispatch();
  const socialLinks = useSelector(state => state.social);

  const handleAdd = () => {
    if (social.trim()) {
      dispatch(addSocial(social.toString()));
      setSocial('');
    }
  };

  return (
    <div>
      <h2>Add your Social Media Links</h2>

      <input
        type="text"
        name="Social" // 👈 Cypress depends on this name
        placeholder="Social Links"
        value={social}
        onChange={(e) => setSocial(e.target.value.toString())}
      />

      <Button
        id="add_social"
        variant="contained"
        color="primary"
        onClick={handleAdd}
        style={{ marginLeft: '10px' }}
      >
        ADD SOCIAL
      </Button>

      <ul>
        {socialLinks.map((s, i) => (
          <li key={i} style={{ marginTop: '10px' }}>
            {s}
            <Button
              variant="outlined"
              color="secondary"
              style={{ marginLeft: '10px' }}
              onClick={() => dispatch(deleteSocial(i))}
            >
              DELETE SOCIAL
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}
