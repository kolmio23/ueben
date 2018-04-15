import React, {Component} from 'react';
import './App.css';
import getCountries from './api';
import EnterName from './EnterName';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {username: "", training: "", what: "name", wrong: 0, correct: 0};
    this.handlerUsername = this.handlerUsername.bind(this);
    this.handlerTraining = this.handlerTraining.bind(this);
    this.handlerStats = this.handlerStats.bind(this);

    let c = getCountries();
    console.log(c)

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



class Status extends Component {
  render() {
    return <div className="Status"><br/><br/><br/><br/><br/>- {this.props.username} - {this.props.training} -<br/>
    - Richtig {this.props.correct} - Falsch {this.props.wrong} - 
    </div>
  }
}


export default App;
