import React, { Component } from 'react';
import { Container } from 'reactstrap';
import CustomNavbar from './components/CustomNavbar';
import Welcome from './components/Welcome';

class App extends Component {
    render() {
        let view;
        if (this.props.view.currentView === 'welcome') {
            view = <Welcome
                name={this.props.quizData.name}
                description={this.props.quizData.description}
                start={this.props.startQuiz}
            />

        } else if (this.props.view.currentView === 'questions') {
            view = <div>Here be questions</div>
        } else {
            view = <div>Not yet implemented</div>
        }

        return (
            <div>
                <CustomNavbar/>
                <Container fluid>
                    {view}
                </Container>
            </div>
        );
    }
}

export default App;
