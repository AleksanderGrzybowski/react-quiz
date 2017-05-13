import React from 'react';
import { Card, CardBlock, CardText } from 'reactstrap';

const cardStateToColor = (state) => {
    if (state === 'correct') {
        return 'success';
    } else if (state === 'incorrect') {
        return 'danger';
    } else if (state === 'default') {
        return '';
    }
};

const Answer = ({text, onAnswerSelected, state}) => (
    <Card
        color={cardStateToColor(state)}
        className={state !== 'default' ? 'selected-answer' : ''}
        style={{minHeight: 150, marginBottom: 20, cursor: 'pointer'}}
        onClick={onAnswerSelected}
    >
        <CardBlock>
            <CardText>
                {text}
            </CardText>
        </CardBlock>
    </Card>
);

export default Answer;
