import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: '1', name: 'Juliana', age: 33},
      { id: '2', name: 'Felipe', age: 36 },
      { id: '3', name: 'Lanaya', age: 8 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    //this is another solution instead of the code above
    //const person = Object.assign({}, this.state.persons[personIndex])
    //the one above is more modern
    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( {persons: persons} )
  }

  deletePersonHandler = (personIndex) => {
    //fetch all the persons
    //const persons = this.state.persons.slice() you can use this one instead of the one above
    const persons = [...this.state.persons];
    //create a new version of persons array
    persons.splice(personIndex, 1);
    //update the state
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    //if doesshow is true it will set showPersons to false
    const doesShow = this.state.showPersons;
    //if doesshow is false it will set showPersons to true
    this.setState( { showPersons: !doesShow } );
  }

  render() {
    let persons = null;

    if (this.state.showPersons){
      persons = (
        <div>
           {/* this.state.persons refers to the persons array  */}
          {this.state.persons.map((person, index) => {
            return <Person 
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)}/>
          })}
        </div>
      );
     
    }

    const classes = [];
    if (this.state.persons.length <= 2){
      classes.push('red'); //classes = ['red']
    }
    if (this.state.persons.length <= 1){
      classes.push('bold'); //classes = ['red', 'bold']
    }

    return (

      <div className="App">
        <h1>I am a react app</h1>
        <p className={classes.join(' ')}>This is really working</p>
        <button alt={this.state.showPersons} onClick={this.togglePersonsHandler}>
          Toggle persons
        </button> 
        {persons}
      </div>

      
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi I am a react App!!'));
  }
}

export default App;
