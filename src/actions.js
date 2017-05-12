import axios from 'axios';

export const fetchQuizData = () => (dispatch) => {
    dispatch({type: 'QUIZ_FETCH_START'});

    const name = window.location.hash.substring(2);
    axios.get(`/quizes/${name}.json`)
        .then(({data}) => dispatch({type: 'QUIZ_FETCH_READY', data}))
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

export const selectAnswer = (answer) => (dispatch) => {
    dispatch({type: 'SELECT_ANSWER', answer});
    setTimeout(() => dispatch(nextQuestion()), 1000);
};

