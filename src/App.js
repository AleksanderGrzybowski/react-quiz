import React, { Component } from 'react';
import { Container } from 'reactstrap';
import CustomNavbar from './components/CustomNavbar';
import Welcome from './components/Welcome';
import Questions from './components/Questions';

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
            view = <Questions
                currentQuestionIndex={this.props.progress.currentQuestionIndex}
                quizData={this.props.quizData}
                nextQuestion={this.props.nextQuestion}
            />
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
