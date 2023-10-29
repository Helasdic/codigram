import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const user = useSelector((state) => state.user); // Ambil data pengguna dari Redux store

  return (
    <div>
      <h2>Profile</h2>
      {user && (
        <div>
          <h3>Username: {user.username}</h3>
          <img src={user.profileImageUrl} alt={user.username} />
        </div>
      )}
    </div>
  );
};

export default Profile;
