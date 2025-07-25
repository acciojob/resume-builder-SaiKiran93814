import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { updateProfile } from '../features/profileSlice';

export default function ProfileForm() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.profile);

  const handleChange = (e) => {
    dispatch(updateProfile({ [e.target.name]: e.target.value }));
  };

  return (
    <div>
      <h2>Add your profile details</h2>  

      <input name="fname" value={profile.fname} onChange={handleChange} placeholder="First Name" />
      <input name="lname" value={profile.lname} onChange={handleChange} placeholder="Last Name" />
      <input name="phone" value={profile.phone} onChange={handleChange} placeholder="Phone Number" />
      <input name="address" value={profile.address} onChange={handleChange} placeholder="Address" />
      <input type="file" name="url" />
        <button id="next">Next</button>
    </div>
  );
}