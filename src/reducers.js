import loremIpsum from 'lorem-ipsum';

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

const initialStateQuizData = {
    name: 'Very challenging quiz',
    description: loremIpsum({count: 3}),
    questions: [...new Array(5)].map(() => (
        {
            text: loremIpsum({count: 1}),
            answers: [
                {text: loremIpsum({count: 1})},
                {text: loremIpsum({count: 1})},
                {text: loremIpsum({count: 1})},
                {text: loremIpsum({count: 1})},
            ],
            correctAnswer: 0
        }
    ))
};

export const quizData = (state = initialStateQuizData) => {
    return state;
};


const initialStateProgress = {
    currentQuestionIndex: 0
};

export const progress = (state = initialStateProgress, action) => {
    switch (action.type) {
        case 'NEXT_QUESTION':
            return Object.assign({}, state, {currentQuestionIndex: state.currentQuestionIndex + 1});
        default:
            return state;
    }
};
