export const changeView = (view) => ({type: 'CHANGE_VIEW', view});

export const nextQuestion = () => ({type: 'NEXT_QUESTION'});

export const selectAnswer = (answer) => (dispatch) => {
    dispatch({type: 'SELECT_ANSWER', answer});
    setTimeout(() => dispatch(nextQuestion()), 1000);
};

