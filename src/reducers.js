const initialStateView = {
    currentView: 'welcome',
};

export const view = (state = initialStateView, action) => {
    switch (action.type) {
        case 'CHANGE_VIEW':
            return Object.assign({}, state, {currentView: action.view});
        default:
            return state;
    }
};


const initialStateQuiz = {
    currentQuestionIndex: 0,
    userAnswers: [],
    quizDataStatus: '',
    uiDisabled: false,
    data: {}
};

const setUserAnswer = (userAnswers, answer, index) => {
    return userAnswers.map((a, i) => (i === index) ? answer : a);
};

export const quiz = (state = initialStateQuiz, action) => {
    switch (action.type) {
        case 'QUIZ_FETCH_ERROR':
            return Object.assign({}, state, {quizDataStatus: 'error'});
        case 'QUIZ_FETCH_READY':
            return Object.assign({}, state, {
                quizDataStatus: 'ready',
                data: action.data,
                userAnswers: new Array(action.data.questions.length).fill(null)
            });
        case 'SELECT_ANSWER':
            return Object.assign({}, state, {
                    userAnswers: setUserAnswer(state.userAnswers, action.answer, state.currentQuestionIndex),
                    uiDisabled: true
                }
            );
        case 'NEXT_QUESTION':
            return Object.assign({}, state, {
                currentQuestionIndex: state.currentQuestionIndex + 1,
                uiDisabled: false
            });
        default:
            return state;
    }
};
