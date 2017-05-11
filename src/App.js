import React, { Component } from 'react';
import { Container } from 'reactstrap';
import CustomNavbar from './components/CustomNavbar';
import Welcome from './components/Welcome';
import loremIpsum from 'lorem-ipsum';

class App extends Component {
    render() {
        const description = loremIpsum({count: 5});
        return (
            <div>
                <CustomNavbar/>
                <Container fluid>
                    <Welcome
                        name="Very challenging quiz"
                        description={description}
                    />
                </Container>
            </div>
        );
    }
}

export default App;
