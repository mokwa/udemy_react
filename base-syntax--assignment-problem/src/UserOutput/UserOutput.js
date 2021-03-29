import React from 'react';

const userOutput = (props) => {
    const style = {
        border: '3px solid blue',
        padding: '8px',
        marginTop: '10px'
      };
    return(
        <div style={style}>
            <p>Hello {props.username}</p>
            <p>First assignment in React</p>
        </div>
    )
}

export default userOutput;