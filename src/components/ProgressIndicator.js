import React from 'react';
import { Badge, Col, Row } from 'reactstrap';

const ProgressIndicator = ({current, userAnswers, correctAnswers}) => {
    const range = (max) => [...new Array(max).keys()];
    const style = {fontSize: 30, marginRight: 5};

    const badges = range(userAnswers.length).map(i => {
        let color;
        if (i >= current) {
            color = 'default';
        } else {
            color = (userAnswers[i] === correctAnswers[i]) ? 'success' : 'danger';
        }

        return (
            <Badge
                key={i}
                style={style}
                color={color}
                pill
            >
                {i}
            </Badge>
        );
    });

    return (
        <Row>
            <Col md={12}>
                <div className="text-center">
                    {badges}
                </div>
            </Col>
        </Row>
    );
};

export default ProgressIndicator;
