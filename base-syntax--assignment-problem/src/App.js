import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    username: 'Juliana'
  }

  nameChangedHandler = (event) => {
    this.setState({username: event.target.value})
  }

  render() {
    
    return (
      <div className="App">
        <UserInput 
          changed={this.nameChangedHandler}
          currentName={this.state.username}/>       
        <UserOutput 
          username={this.state.username}/>
        <UserOutput username={this.state.username}/>
 

      </div>
    );
  }
}

export default App;
