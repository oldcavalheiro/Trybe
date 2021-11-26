import React, { useContext } from 'react';
import QuestionCard from './QuestionCard';

import QuestionsContext from '../context/QuestionsContext';

function QuestionList() {
  const { questions } = useContext(QuestionsContext); // Tudo que está no contexto

  return (
    <section>
      {questions.map((question, index) => (
        <QuestionCard key={ index } question={ question } />))}
    </section>
  );
}

export default QuestionList;
