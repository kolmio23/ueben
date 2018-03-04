import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {username: "", training: "", what: "name"};
    this.handlerUsername = this.handlerUsername.bind(this);
    this.handlerTraining = this.handlerTraining.bind(this);
  }

  handlerUsername(username) {
    this.setState({username: username, what: "select"});
  }

  handlerUsername(username) {
    this.setState({username: username, what: "select"});
  }
  
  handlerTraining(training) {
    this.setState({training: training, what: "train"});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="title.png" alt="title" />
        </header>
        <EnterName handlerUsername={this.handlerUsername} handlerTraining={this.handlerTraining} what={this.state.what}/>
        <Status username={this.state.username} training={this.state.training}/>
      </div>
    );
  }
}



class EnterName extends Component {
  constructor(props) {
    super(props);
    this.state = {username: ""};
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.chooseName = this.chooseName.bind(this);
    this.chooseTraining = this.chooseTraining.bind(this);
  }

  render() {
    if( this.props.what === "select") {

      return (
        <div>
          <p>Was möchtest du üben?</p>
          <p/>
          <button onClick={this.chooseTraining}>Länder Europas</button><p/>
          <button onClick={this.chooseTraining}>Multiplikation</button><p/>
          <button onClick={this.chooseTraining}>Division</button><p/>
        </div>
      );

    } else if( this.props.what === "train") {

      return (
        <div>
          <p>Üb, üb, üb!</p>
        </div>
              );

    } else {

      return (
        <div>
          <p>Wie heißt du?</p>
          <input id="name" type="text" size="40" value={this.state.username} onKeyPress={this.handleKeyPress} onChange={this.handleChange}/>
          <p/>
          <button onClick={this.chooseName}>Los gehts</button>
        </div>
      );
    }
  }

  handleChange(event) {
    this.setState({username: event.target.value});
  }

  handleKeyPress(event) {
    if (event.key === 'Enter') {
      this.chooseName()
    }
  }

  chooseName() {
    this.props.handlerUsername(this.state.username)
  }

  chooseTraining() {
    this.props.handlerTraining("Länder Europas")
  }
}



class Status extends Component {
  render() {
    return <div className="Status"><br/><br/><br/><br/><br/>- {this.props.username} - {this.props.training} -</div>
  }
}


export default App;
