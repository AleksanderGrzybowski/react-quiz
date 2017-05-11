import React, { Component } from 'react';
import { Container } from 'reactstrap';
import CustomNavbar from './components/CustomNavbar';
import AnswerSelector from './components/AnswerSelector';
import loremIpsum from 'lorem-ipsum';

class App extends Component {
    render() {
        const question = {
            text: loremIpsum({count: 1}),
            answers: [
                {text: loremIpsum({count: 1})},
                {text: loremIpsum({count: 1})},
                {text: loremIpsum({count: 1})},
                {text: loremIpsum({count: 1})},
            ],
            correctAnswer: 0
        };
        return (
            <div>
                <CustomNavbar/>
                <Container fluid>
                    <AnswerSelector question={question}/>
                </Container>
            </div>
        );
    }
}

export default App;
