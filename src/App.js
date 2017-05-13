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
    
    correctAnswers() {
        return this.props.quiz.data.questions.map(question => question.correctAnswer);
    }

    render() {
        let view;
        if (this.props.view.currentView === 'welcome') {
            const {name, description} = this.props.quiz.data;
            view = <Welcome
                name={name}
                quizDataStatus={this.props.quiz.quizDataStatus}
                description={description}
                start={this.props.startQuiz}
            />
        } else if (this.props.view.currentView === 'questions') {
            view = <Questions
                currentQuestionIndex={this.props.quiz.currentQuestionIndex}
                quizData={this.props.quiz.data}
                correctAnswers={this.correctAnswers()}
                userAnswers={this.props.quiz.userAnswers}
                selectAnswer={this.props.selectAnswer}
                currentQuestion={this.props.quiz.data.questions[this.props.quiz.currentQuestionIndex]}
                userAnswer={this.props.quiz.userAnswers[this.props.quiz.currentQuestionIndex]}
            />
        } else if (this.props.view.currentView === 'summary') {
            view = <Summary
                score={this.correctAnswersCount()}
                total={this.props.quiz.data.questions.length}
                restartQuiz={this.props.restartQuiz}
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
