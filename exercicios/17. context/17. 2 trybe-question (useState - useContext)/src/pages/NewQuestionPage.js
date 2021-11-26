import React, { useState, useContext } from 'react';


import QuestionsContext from '../context/QuestionsContext';

function NewQuestionPage({ history }) {
  const [question, setQuestion] = useState('');
  const [name, setName] = useState('');

  const { submitQuestion } = useContext(QuestionsContext);

  function handleSubmit(){
    const newQuestionState = {
      question,
      user: name,
    }

    submitQuestion(newQuestionState);
    history.push('/')
  }

  return (
    <section className="question-section">
      <form onSubmit={ handleSubmit }>
        <label htmlFor="question">
          Digite a sua pergunta:
          <textarea
            value={question}
            onChange={ (event) => { setQuestion(event.target.value)} }
            name="question"
            placeholder="Escreva aqui sua pergunta"
            id="question"
            cols="30"
            rows="10"
          />
        </label>
        <label htmlFor="user">
          Digite o seu nome:
          <input
            value={name}
            onChange={ (event) => { setName(event.target.value) } }
            type="text"
            name="name"
            placeholder=""
            id="user"
          />
        </label>
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}

export default NewQuestionPage;
