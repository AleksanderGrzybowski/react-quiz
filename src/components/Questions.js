import React from 'react';
import ProgressIndicator from './ProgressIndicator';
import AnswerSelector from './AnswerSelector';

const Questions = ({currentQuestionIndex, userAnswers, correctAnswers, currentQuestion, userAnswer, selectAnswer}) => (
    <div>
        <ProgressIndicator
            current={currentQuestionIndex}
            userAnswers={userAnswers}
            correctAnswers={correctAnswers}
        />
        <AnswerSelector
            question={currentQuestion}
            userAnswer={userAnswer}
            onAnswerSelected={selectAnswer}
        />
    </div>
);

export default Questions;
