import React, { Component } from 'react';
import './App.css';

class Question extends Component {
    constructor(props) {
        super(props);
        this.state = {country: "Frankreich", capital: ""};

        this.handleAnswer = this.handleAnswer.bind(this);
    }

    render() {
        return (
        <div>
            <p>Land</p><input id="country" type="text" size="40" value={this.state.country}/>
            <p>Hauptstadt</p><input id="capital" type="text" size="40" value={this.state.capital}/>
            <p/>
            <button onClick={(e) => this.handleAnswer(true)}>Richtig</button> &nbsp;
            <button onClick={(e) => this.handleAnswer(false)}>Falsch</button>
        </div>
        );
    }

    handleAnswer(correct) {
        this.setState({country: "Schweiz"});
        this.props.handlerStats(correct)
      }
}


export default Question;
