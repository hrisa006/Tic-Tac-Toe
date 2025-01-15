import { useState } from "react";

export default function Player({ initialName, symbol, isActive, onChangeName }) {
    const [ playerName, setPlayerName ] = useState(initialName);
    const [ isEditing, setIsEditing ] = useState(false);

    function handleChange(event) {
        console.log(event);
        setPlayerName(event.target.value);
    }

    function handleEditing() {
        //setIsEditing(!isEditing); //schedules a state update to true (not a good practise)
        setIsEditing((editing) => !editing);
        if(isEditing) {
            onChangeName(symbol, playerName);
        }
    }

    let editablePlayerName = <span className='player-name'>{playerName}</span>;
    let btnCaption = 'Edit';

    if(isEditing) {
        editablePlayerName = <input type='text' required value={playerName} onChange={handleChange} />;
        btnCaption = 'Save';
    }

    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {editablePlayerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditing}>{btnCaption}</button>
        </li>
    );
}