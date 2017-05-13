import React from 'react';
import { Button, Col, Progress, Row } from 'reactstrap';

const percentageToColor = (value) => {
    if (value < 20) {
        return 'danger'
    } else if (value < 60) {
        return 'info';
    } else {
        return 'success';
    }
};

const ProgressBar = ({score, total}) => {
    const percentage = 100 * score / total;
    return <Progress color={percentageToColor(percentage)} value={percentage}/>;
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
                    onClick={restartQuiz}
                >
                    Try again!
                </Button>
            </div>
        </Col>
    </Row>
);

export default Summary;
