import React, { useContext } from "react";
import ProfileContext from "./data";

const Team = () => {
  const context = useContext(ProfileContext);
  return (
    <div>
      <h1>{context.team}</h1>
      <h5>{context.fullName}</h5>
    </div>
  );
};

export default Team;
