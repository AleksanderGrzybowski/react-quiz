import React, { Component } from 'react';
import ProgressIndicator from './ProgressIndicator';
import AnswerSelector from './AnswerSelector';

class Questions extends Component {
    render() {
        return (
            <div>
                <ProgressIndicator
                    current={this.props.currentQuestionIndex}
                    userAnswers={this.props.userAnswers}
                    correctAnswers={this.props.correctAnswers}
                />
                <AnswerSelector
                    question={this.props.quizData.questions[this.props.currentQuestionIndex]}
                    userAnswer={this.props.userAnswers[this.props.currentQuestionIndex]}
                    onAnswerSelected={this.props.selectAnswer}
                />
            </div>
        );
    }
}

export default Questions;
