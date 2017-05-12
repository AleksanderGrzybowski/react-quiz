import React, { Component } from 'react';
import { Container } from 'reactstrap';
import CustomNavbar from './components/CustomNavbar';
import Welcome from './components/Welcome';
import Questions from './components/Questions';

class App extends Component {
    render() {
        let view;
        if (this.props.view.currentView === 'welcome') {
            const {name, description} = this.props.quiz.data;
            view = <Welcome
                name={name}
                description={description}
                start={this.props.startQuiz}
            />
        } else if (this.props.view.currentView === 'questions') {
            view = <Questions
                currentQuestionIndex={this.props.quiz.currentQuestionIndex}
                quizData={this.props.quiz.data}
                userAnswers={this.props.quiz.userAnswers}
                selectAnswer={this.props.selectAnswer}
            />
        } else {
            view = <div>Not yet implemented</div>
        }

        return (
            <div>
                <CustomNavbar/>
                <Container fluid>
                    {view}
                </Container>
            </div>
        );
    }
}

export default App;
