import React from "react";
import { useSelector } from "react-redux";

const SkillByUser = () => {
  const users = useSelector((state) => state.usersReducer.usersWithSkill);
  console.log("state", users);

  return (
    <div>
      <h1>Here we need a map for users</h1>
      <div>
        {users.map((user) => {
          return <h2>{user.userName}</h2>;
        })}
      </div>
    </div>
  );
};

export default SkillByUser;
