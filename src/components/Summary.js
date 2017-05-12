import React from 'react';
import { Col, Progress, Row } from 'reactstrap';

const ProgressBar = ({score, total}) => {
    const progressValue = 100 * score / total;
    let color;
    if (progressValue < 20) {
        color = 'danger'
    } else if (progressValue < 60) {
        color = 'info';
    } else {
        color = 'success';
    }

    return <Progress color={color} value={progressValue}/>
};

const Summary = ({score, total}) => (
    <Row>
        <Col md={12}>
            <h1 className="text-center">
                You scored {score} / {total}
                <ProgressBar score={score} total={total}/>
            </h1>
        </Col>
    </Row>
);

export default Summary;
