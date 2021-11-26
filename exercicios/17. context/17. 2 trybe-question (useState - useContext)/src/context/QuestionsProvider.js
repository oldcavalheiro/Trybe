import React, { useState } from 'react';
import { createQuestion, getQuestions } from '../services/api';
import QuestionsContext from "./QuestionsContext";

function QuestionsProvider(props) {
  const [questions, setQuestions] = useState([]); // [state, setter]
  const [isLoading, setIsLoading] = useState(false);

  async function fetchQuestions(){
    setIsLoading(true);
    const newQuestions = await getQuestions();
    setQuestions(newQuestions);
    setIsLoading(false);
  }

  async function submitQuestion(newQuestion){
    await createQuestion(newQuestion);
  }

  return (
    <QuestionsContext.Provider value={ { questions, isLoading, fetchQuestions, submitQuestion } }>
      { props.children }
    </QuestionsContext.Provider>
  )
}

export default QuestionsProvider;

//////

// this.state = {
//   questions: [],
//   isLoading: false,
// }

// this.setState({ questions: novoValor }, () => {} )