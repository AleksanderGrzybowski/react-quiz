import React, { Component } from 'react';
import { Alert, Col, Container, Row } from 'reactstrap';

class App extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <Alert color="success">
                            It works!
                        </Alert>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default App;
