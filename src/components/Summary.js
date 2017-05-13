import React from 'react';
import { Button, Col, Progress, Row } from 'reactstrap';

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

const Summary = ({score, total, restartQuiz}) => (
    <Row>
        <Col md={{size: 4, push: 4}}>
            <h1 className="text-center" style={{marginBottom: 20}}>
                You scored {score} / {total}
            </h1>
            <ProgressBar score={score} total={total}/>
            <div className="text-center">
                <Button
                    className="text-center"
                    style={{marginTop: 20}}
                    color="primary"
                    size="lg"
                    onClick={restartQuiz}>
                    Try again!
                </Button>
            </div>
        </Col>
    </Row>
);

export default Summary;
