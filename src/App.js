import React, { Component } from 'react';
import { Container } from 'reactstrap';
import CustomNavbar from './components/CustomNavbar';
import Welcome from './components/Welcome';
import Questions from './components/Questions';
import Summary from './components/Summary';

class App extends Component {
    correctAnswersCount() {
        const {quiz} = this.props;
        return quiz.userAnswers
            .map((answer, index) => (answer === quiz.data.questions[index].correctAnswer) ? 1 : 0)
            .reduce((a, b) => a + b);
    }

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
        } else if (this.props.view.currentView === 'summary') {
            view = <Summary
                score={this.correctAnswersCount()}
                total={this.props.quiz.data.questions.length}
            />
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
