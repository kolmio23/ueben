import React, {Component} from 'react';
import Question from './Question';

export default class EnterName extends Component {
    constructor(props) {
        super(props);
        this.state = {username: ""};
        this.handleChange = this.handleChange.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.chooseName = this.chooseName.bind(this);
        this.chooseTraining = this.chooseTraining.bind(this);
    }

    render() {
        if (this.props.what === "select") {

            return (
                <div>
                    <p>Was möchtest du üben?</p>
                    <p/>
                    <button onClick={this.chooseTraining}>Bundesländer</button>
                    <p/>
                    <button onClick={this.chooseTraining}>Länder Europas</button>
                    <p/>
                    <button onClick={this.chooseTraining}>Multiplikation</button>
                    <p/>
                    <button onClick={this.chooseTraining}>Division</button>
                    <p/>
                </div>
            );

        } else if (this.props.what === "train") {

            return <Question handlerStats={this.props.handlerStats}/>

        } else {

            return (
                <div>
                    <p>Wie heißt du?</p>
                    <input id="name" type="text" size="40" value={this.state.username} onKeyPress={this.handleKeyPress}
                           onChange={this.handleChange}/>
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