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

