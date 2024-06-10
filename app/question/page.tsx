import Question from '@/components/question/Question';
import { getQuestions } from '@/utils/functions'
import React from 'react'

const QuestionPage = () => {
  const questions = getQuestions();
  return (
    <div className='flex flex-col space-y-4 md:space-y-8 p-4 lg:p-8'>
      {questions.map((q) => (
        <Question 
        key={q.id}
        withId={false}
        checkEnabled={true}
        question={q} />
      ))}
    </div>
  )
}

export default QuestionPage