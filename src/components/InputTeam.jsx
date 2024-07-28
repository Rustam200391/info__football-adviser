import React, { useState } from "react";
import "./InputTeam.css";
import TeamInfo from "./TeamInfo";

const InputTeam = () => {
  const [teamName, setTeamName] = useState("");
  const [displayName, setDisplayName] = useState("");

  const handleChange = (e) => {
    setTeamName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setDisplayName(teamName);
  };

  return (
    <div className="input-team-container">
      <div className="input-team">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={teamName}
            onChange={handleChange}
            placeholder="Введите название команды"
          />
          <button type="submit">Отправить</button>
        </form>
      </div>
      {displayName && <TeamInfo teamName={displayName} />}
    </div>
  );
};

export default InputTeam;
