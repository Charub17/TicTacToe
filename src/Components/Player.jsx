import { useState } from "react";
export const Player = ({ initialName, symbol, isActive }) => {
  const [isEditing, setIsEditing] = useState(false);
  function setHandler() {
    setIsEditing((editing) => !editing);
  }

  const [name, setName] = useState(initialName);
  function handleChange(event) {
    setName(event.target.value);
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <div className="player">
        {isEditing ? (
          <input
            type="text"
            required
            value={name}
            onChange={handleChange}
          ></input>
        ) : (
          <span className="player-name">{name}</span>
        )}
        <span className="player-symbol">{symbol}</span>
      </div>
      <button onClick={setHandler} className="button-edit">
        {isEditing ? "Save" : "Edit"}
      </button>
    </li>
  );
};
