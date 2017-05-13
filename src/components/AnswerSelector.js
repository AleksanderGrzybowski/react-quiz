import React from 'react';
import { Col, Row } from 'reactstrap';
import Answer from './Answer';
import { range } from '../utils';

const determineAnswerBlockState = (blockIndex, userAnswer, correctAnswer) => {
    if (userAnswer === null) {
        return 'default';
    } else {
        if (userAnswer === correctAnswer) {
            return (blockIndex === correctAnswer) ? 'correct' : 'default';
        } else {
            if (blockIndex === userAnswer) {
                return 'incorrect';
            } else if (blockIndex === correctAnswer) {
                return 'correct';
            } else {
                return 'default';
            }
        }
    }
};

const AnswerSelector = ({question, userAnswer, onAnswerSelected}) => {
    const answerBlocks = range(4).map(i => (
            <Answer
                state={determineAnswerBlockState(i, userAnswer, question.correctAnswer)}
                text={question.answers[i].text}
                onAnswerSelected={() => onAnswerSelected(i)}
            />
        )
    );

    return (
        <div>
            <Row>
                <Col md={12}>
                    <h3 className="text-center" style={{marginBottom: 20, marginTop: 20}}>{question.text}</h3>
                </Col>
            </Row>
            <Row>
                <Col md={6}> {answerBlocks[0]} </Col>
                <Col md={6}> {answerBlocks[1]} </Col>
            </Row>
            <Row>
                <Col md={6}> {answerBlocks[2]} </Col>
                <Col md={6}> {answerBlocks[3]} </Col>
            </Row>
        </div>
    );
};

export default AnswerSelector;
