import { useEffect, useState } from 'react';
import { profile } from '../../db.json';

import './Profile.css'

export function Profile() {

  const [profile, setProfile] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3001/profile`)
    .then((res) => res.json())
    .then((profile) => setProfile(profile))
  },[])

  return (
    <>
      <h1 className="profile-details">Profile Details</h1>
      {!profile && <h2>Loading ...</h2>}
        <div className="profile-container">    
              <h3>Specific ID: {profile.id}</h3>
              <h3>Email: {profile.email}</h3>
              <h3>First Name: {profile.fName}</h3>
              <h3>Last Name: {profile.lName}</h3>
              <h3>Password: {profile.password}</h3>
              <h3>Role: {profile.role}</h3>
        </div>
    </>
  );
}




