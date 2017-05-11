import React from 'react';
import { Card, CardBlock, CardText, Col, Row } from 'reactstrap';

const Answer = ({text}) => (
    <Card style={{minHeight: 150, marginBottom: 20}}>
        <CardBlock>
            <CardText>
                {text}
            </CardText>
        </CardBlock>
    </Card>
);

const AnswerSelector = ({question}) => {
    return (
        <div>
            <Row>
                <Col md={12}>
                    <h3 className="text-center">{question.text}</h3>
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <Answer text={question.answers[0].text}/>
                </Col>
                <Col md={6}>
                    <Answer text={question.answers[1].text}/>
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <Answer text={question.answers[2].text}/>
                </Col>
                <Col md={6}>
                    <Answer text={question.answers[3].text}/>
                </Col>
            </Row>
        </div>
    );
};

export default AnswerSelector;
