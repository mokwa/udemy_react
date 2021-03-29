import React from 'react';

const userInput = (props) => {
    const style = {
        border: '3px solid blue',
        padding: '8px',
      };

    return <input 
        type="text" 
        style={style}
        onChange={props.changed} 
        value={props.currentName}/>
}

export default userInput;