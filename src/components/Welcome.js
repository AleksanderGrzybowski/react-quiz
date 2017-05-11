import React from 'react';
import { Button, Col, Jumbotron, Row } from 'reactstrap';

const Welcome = ({name, description, start}) => (
    <div>
        <Row>
            <Col md={12}>
                <Jumbotron>
                    <h1 className="display-3">{name}</h1>
                    <p className="lead">{description}</p>
                    <div className="text-center">
                        <Button color="primary" size="lg" onClick={start}>Start!</Button>
                    </div>
                </Jumbotron>
            </Col>
        </Row>
    </div>
);

export default Welcome;
