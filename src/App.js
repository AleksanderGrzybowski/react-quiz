import React, { Component } from 'react';
import { Container } from 'reactstrap';
import CustomNavbar from './components/CustomNavbar';
import ProgressIndicator from './components/ProgressIndicator';

class App extends Component {
    render() {
        return (
            <div>
                <CustomNavbar/>
                <Container fluid>
                    <ProgressIndicator
                        max={10}
                        current={5}
                    />
                </Container>
            </div>
        );
    }
}

export default App;
