import axios from 'axios';
import shuffle from 'shuffle-array';

export const fetchQuizData = () => (dispatch) => {
    dispatch({type: 'QUIZ_FETCH_START'});

    axios.get('/quiz.json')
        .then(({data}) => {
            document.getElementsByClassName('loader')[0].remove();
            
            data.questions = shuffle(data.questions);
            return dispatch({type: 'QUIZ_FETCH_READY', data});
        })
        .catch(() => dispatch({type: 'QUIZ_FETCH_ERROR'}));
};

export const changeView = (view) => ({type: 'CHANGE_VIEW', view});

export const nextQuestion = () => (dispatch, getState) => {
    const currentQuestionIndex = getState().quiz.currentQuestionIndex;
    const questionsCount = getState().quiz.data.questions.length;

    if (currentQuestionIndex >= (questionsCount - 1)) {
        dispatch(changeView('summary'));
    } else {
        dispatch({type: 'NEXT_QUESTION'});
    }
};

export const selectAnswer = (answer) => (dispatch, getState) => {
    if (getState().quiz.uiDisabled) {
        return;
    }
    
    dispatch({type: 'SELECT_ANSWER', answer});
    setTimeout(() => dispatch(nextQuestion()), 1000);
};

