import React from "react";

//? import components
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader.jsx";
import ProfileMenuInfluencer from "../../components/ProfileMenuInfluencer/ProfileMenuInfluencer.jsx";
function Profile() {
  return (
    <>
      <ProfileHeader influencer={true} />
      <ProfileMenuInfluencer influencer={true} />
    </>
  );
}

export default Profile;
