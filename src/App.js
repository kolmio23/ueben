import React, { Component } from 'react';
import './App.css';
import Question from "./Question";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {username: "", training: "", what: "name", wrong: 0, correct: 0};
    this.handlerUsername = this.handlerUsername.bind(this);
    this.handlerTraining = this.handlerTraining.bind(this);
    this.handlerStats = this.handlerStats.bind(this);
  }

  handlerUsername(username) {
    this.setState({username: username, what: "select"});
  }

  handlerTraining(training) {
    this.setState({training: training, what: "train"});
  }

  handlerStats(correct) {
    if (correct) {
      this.setState({correct: this.state.correct + 1});
    } else {
      this.setState({wrong: this.state.wrong + 1});
    }   
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="title.png" alt="title" />
        </header>
        <EnterName handlerUsername={this.handlerUsername} handlerTraining={this.handlerTraining} handlerStats={this.handlerStats} what={this.state.what}/>
        <Status username={this.state.username} training={this.state.training} correct={this.state.correct} wrong={this.state.wrong}/>
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

      return <Question handlerStats={this.props.handlerStats}/>

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
    return <div className="Status"><br/><br/><br/><br/><br/>- {this.props.username} - {this.props.training} -<br/>
    - Richtig {this.props.correct} - Falsch {this.props.wrong} - 
    </div>
  }
}


export default App;
