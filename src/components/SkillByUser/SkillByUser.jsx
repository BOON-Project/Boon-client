import React from "react";

export default function SkillByUser(props) {
  const { name, creator } = props.location.state.skill;

  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
}
