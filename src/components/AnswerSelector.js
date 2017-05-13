import React from 'react';
import { Card, CardBlock, CardText, Col, Row } from 'reactstrap';

const Answer = ({text, onAnswerSelected, state}) => {
    let cardColor;
    if (state === 'correct') {
        cardColor = 'success';
    } else if (state === 'incorrect') {
        cardColor = 'danger';
    } else if (state === 'default') {
        cardColor = '';
    }

    return (
        <Card
            color={cardColor}
            className={state !== 'default' ? 'selected-answer' : ''}
            style={{minHeight: 150, marginBottom: 20, cursor: 'pointer'}}
            onClick={onAnswerSelected}
        >
            <CardBlock>
                <CardText>
                    {text}
                </CardText>
            </CardBlock>
        </Card>
    );
};

const determineAnswerBlockState = (blockIndex, userAnswer, correctAnswer) => {
    let state;
    if (userAnswer === null) {
        state = 'default';
    } else {
        if (userAnswer === correctAnswer) {
            if (blockIndex === correctAnswer) state = 'correct';
            else state = 'default';
        } else {
            if (blockIndex === userAnswer) state = 'incorrect';
            else if (blockIndex === correctAnswer) state = 'correct';
            else state = 'default';
        }
    }
    return state;
};

const AnswerSelector = ({question, userAnswer, onAnswerSelected}) => {
    const answerBlocks = [...new Array(4).keys()].map(i => (
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
