import React from 'react';
import { Card, CardBlock, CardText, Col, Row } from 'reactstrap';

const Answer = ({text, onAnswerSelected}) => (
    <Card style={{minHeight: 150, marginBottom: 20, cursor: 'pointer'}} onClick={onAnswerSelected}>
        <CardBlock>
            <CardText>
                {text}
            </CardText>
        </CardBlock>
    </Card>
);

const AnswerSelector = ({question, onAnswerSelected}) => {
    return (
        <div>
            <Row>
                <Col md={12}>
                    <h3 className="text-center">{question.text}</h3>
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <Answer text={question.answers[0].text} onAnswerSelected={() => onAnswerSelected(0)}/>
                </Col>
                <Col md={6}>
                    <Answer text={question.answers[1].text} onAnswerSelected={() => onAnswerSelected(1)}/>
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <Answer text={question.answers[2].text} onAnswerSelected={() => onAnswerSelected(2)}/>
                </Col>
                <Col md={6}>
                    <Answer text={question.answers[3].text} onAnswerSelected={() => onAnswerSelected(3)}/>
                </Col>
            </Row>
        </div>
    );
};

export default AnswerSelector;
