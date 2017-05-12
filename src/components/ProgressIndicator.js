import React from 'react';
import { Badge, Col, Row } from 'reactstrap';

const ProgressIndicator = ({max, current}) => {
    const range = (max) => [...new Array(max).keys()];
    const style = {fontSize: 30, marginRight: 5};

    const badges = range(max).map(i => (
        <Badge
            key={i}
            style={style}
            color={(i <= current) ? 'primary' : 'default'}
            pill
        >
            {i}
        </Badge>
    ));

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
