import React from 'react';

import classes from './Cockpit.css';

const cockpit = (props) => {
    const assignedclasses = [];
    let btnClass = '';

    if(props.showPersons){
        btnClass = classes.Red;
    }
   
    if (props.persons.length <= 2){
      assignedclasses.push(classes.red); //classes = ['red']
    }
    if (props.persons.length <= 1){
      assignedclasses.push(classes.bold); //classes = ['red', 'bold']
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedclasses.join(' ')}>This is really working</p>
            <button 
                className={btnClass} 
                alt={props.showPersons.toString()} onClick={props.clicked}>
                Toggle persons
            </button> 
        </div>
    );
};

export default cockpit;