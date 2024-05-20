import React from 'react';
import './Profile.css';

const Profile = () => {
  const profiles = [
    {
      name: 'Rajat Dwivedi',
      title: 'Software Engineer',
      description: '8 Years',
      imgSrc:'images/rajatt.jpg'
    },
    {
      name: 'Rakhi Chauhan',
      title: 'Product Manager',
      description: '6 Years',
      imgSrc: 'images/rocky.jpg'
    },
    {
      name: 'Gaurav Kumar Singh',
      title: 'UX Designer',
      description: '9 Months',
      imgSrc: 'images/gaurav.jpg'
    },
    {
      name: 'Kamal Singh',
      title: ' Part Time Billionaire ',
      description: '9.5 Years',
      imgSrc: 'images/kamal.jpg'
    },
    {
      name: 'Satyam Kumar Singh',
      title: 'Full Time Nalla',
      description: '100 Years',
      imgSrc: 'images/sattoo.jpg'
    },
    {
      name: 'Thanthan Kumar',
      title: 'Django Non Developer',
      description: '29 Years',
      imgSrc: 'images/Thanthan.png'
    },
    
  ];

  return (
    <div className="profile-container">
      {profiles.map((profile, index) => (
        <div key={index} className="profile-card">
          <div className="profile-content">
            <img src={profile.imgSrc} className="profile-img" />
            <div className="profile-details">
              <h2>{profile.name}</h2>
              <h4>{profile.title} - {profile.description}</h4>
            </div>
          </div>
          <div className="profile-buttons">
            <h1>________________</h1>
            <button className="btn1">View Profile</button>
            <button className="btn2">Book Consultation</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Profile;
