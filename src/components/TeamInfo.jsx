import React from "react";
import "./TeamInfo.css";

const TeamInfo = ({ teamName }) => {
  // Здесь вы можете добавить логику для запроса информации о команде по имени
  return (
    <div className="team-info">
      <h2>Информация о команде: {teamName}</h2>
      {/* Здесь вы можете отображать информацию о команде */}
    </div>
  );
};

export default TeamInfo;
