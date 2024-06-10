export interface IQuestion {
    id : number
    text : string
    options : IOptions[]
    answer : number
    img : boolean
    type : QuestionTypes
}

export enum QuestionTypes {
    CHECK_BOX,
    RADIO_BUTTON
}

interface IOptions {
    id : number,
    text : string
}

export interface IState {
    id : number
    title : string
    questions : IQuestion[]
}