import React, { useContext } from "react";
import ProfileContext from "./data";
import User from "./User";

const Profile = () => {
  const context = useContext(ProfileContext);
  return (
    <div>
      <h3>{context.company}</h3>
      <a href={context.url}>Click here</a>
      <img src={context.companyImage} alt="progress" />
      <User />
    </div>
  );
};

export default Profile;
