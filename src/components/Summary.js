import React from 'react';
import { Col, Row } from 'reactstrap';

const Summary = ({score, total}) => (
    <div>
        <Row>
            <Col md={12}>
                <h1 className="text-center">
                    You scored {score} / {total}
                </h1>
            </Col>
        </Row>
    </div>
);

export default Summary;
