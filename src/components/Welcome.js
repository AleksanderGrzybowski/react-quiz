import React from 'react';
import { Button, Col, Jumbotron, Row } from 'reactstrap';

const Welcome = ({quizDataStatus, name, description, start}) => {
    let content;
    if (quizDataStatus === 'error') {
        content = <h1 className="text-center">Error fetching quiz data</h1>
    } else {
        content = (
            <Jumbotron>
                <h1 className="display-3">{name}</h1>
                <p className="lead">{description}</p>
                <div className="text-center">
                    <Button color="primary" size="lg" onClick={start}>Start!</Button>
                </div>
            </Jumbotron>
        )
    }

    return (
        <div>
            <Row>
                <Col md={12}>
                    {content}
                </Col>
            </Row>
        </div>
    );
};

export default Welcome;
