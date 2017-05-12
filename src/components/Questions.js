import React, { Component } from 'react';
import ProgressIndicator from './ProgressIndicator';
import AnswerSelector from './AnswerSelector';

class Questions extends Component {
    render() {
        return (
            <div>
                <ProgressIndicator
                    max={this.props.quizData.questions.length}
                    current={this.props.currentQuestionIndex}
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
