import React, { useState } from "react";

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
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={teamName}
          onChange={handleChange}
          placeholder="Введите название команды"
        />
        <button type="submit">Отправить</button>
      </form>
      {displayName && <h2>Ваша любимая команда: {displayName}</h2>}
    </div>
  );
};

export default InputTeam;
