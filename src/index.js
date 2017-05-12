import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

import { applyMiddleware, combineReducers, createStore } from 'redux';
import { connect, Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { quiz, view } from './reducers';
import { fetchQuizData, changeView, selectAnswer } from './actions';
import { createLogger } from 'redux-logger';

const store = createStore(
    combineReducers({view, quiz}),
    applyMiddleware(thunk, createLogger())
);

const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => ({
    changeView: (viewName) => dispatch(changeView(viewName)),
    startQuiz: () => dispatch(changeView('questions')),
    selectAnswer: (answer) => dispatch(selectAnswer(answer))
});


const LiveApp = connect(mapStateToProps, mapDispatchToProps)(App);

ReactDOM.render(
    <Provider store={store}>
        <LiveApp/>
    </Provider>,
    document.getElementById('root')
);

store.dispatch(fetchQuizData());
