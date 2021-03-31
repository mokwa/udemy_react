import React, { Component } from "react";
import classes from './App.css';

import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';


class App extends Component {
  constructor(props){
    super(props);
    console.log('[App.js] constructor');
  }

  state = {
    persons: [
      { id: '1', name: 'Juliana', age: 33},
      { id: '2', name: 'Felipe', age: 36 },
      { id: '3', name: 'Lanaya', age: 8 }
    ],
    otherState: 'some other value',
    showPersons: false
  }
  // static getDerivedStateFromProps(props, state){
  //   console.log('[App.js] getDerivedStateFromProps', props);
  //   return state;
  // }

  // componentWillMount(){
  //   console.log('[App.js] componentWillMount');
  // }

  componentDidMount(){
    console.log('[App.js] componentDidMount');
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
    console.log('[App.js] render');
    let persons = null;

    if (this.state.showPersons){
      persons = <Persons
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangedHandler}/>;
    }

    return (

      <div className={classes.App}>
        <Cockpit 
          title={this.props.appTitle}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}/>
        {persons}
      </div>

    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi I am a react App!!'));
  }
}

export default App;
