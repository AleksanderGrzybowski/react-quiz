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
        <Col md={{size: 4, push: 4}}>
            <h1 className="text-center" style={{marginBottom: 20}}>
                You scored {score} / {total}
            </h1>
            <ProgressBar score={score} total={total}/>
        </Col>
    </Row>
);

export default Summary;
