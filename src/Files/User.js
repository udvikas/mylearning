import React, { useContext } from "react";
import ProfileContext from "./data";
import Team from "./Team";

const User = () => {
  const context = useContext(ProfileContext);

  return (
    <div>
     <img src={context.userImage} alt="" />
     <h4>{context.userName}</h4>
     <Team/>
    </div>
  );
};

export default User;
