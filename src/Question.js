import React, { Component } from 'react';
import './App.css';
import bundeslaender from './bundeslaender'

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min; 
  }

class Question extends Component {
    constructor(props) {
        super(props);
        this.state = this.randomQuestion();

        this.handleAnswer = this.handleAnswer.bind(this);
        this.showAnswer = this.showAnswer.bind(this);
        
    }

    render() {
        if( this.state.hidden ) {
            return (
        <div>
            <p>Land</p><input id="country" type="text" size="40" value={this.state.country}/>
            <p>Hauptstadt</p><input id="capital" type="text" size="40" value="?"/>
            <p/>
            <button onClick={(e) => this.showAnswer()}>Zeigen</button>
        </div>
        );
        }
        else {
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
    }

    showAnswer() {
        this.setState({country: this.state.country,
            capital: this.state.capital,
             hidden:false});
    }

    handleAnswer(correct) {
        this.setState(this.randomQuestion())
        this.props.handlerStats(correct)
    }

    randomQuestion() {
        // TODO nicht die letzte Frage nochmal zeigen
        const rnd = getRandomIntInclusive(0, bundeslaender.length-1)
        return {country: bundeslaender[rnd].name,
            capital: bundeslaender[rnd].capital,
             hidden:true};
    }

}

export default Question;
