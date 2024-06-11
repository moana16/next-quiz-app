import { IQuestion, IState } from "./types";

export const getQuestions = () : IQuestion[] => {
    return require('../data/questions.json');
}

export const getStates = () : IState[]=> {
    return require('../data/states.json');
}

export const getQuizQuestions = (state : number) : IQuestion[] => {
    const questions = shuffle(getQuestions());
    const states = shuffle(getStates()[state].questions);
    return [...questions.slice(0,30), ...states.slice(0,3)];
} 

function shuffle(a : any[]) {
    for(let i = a.length-1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i+1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}
