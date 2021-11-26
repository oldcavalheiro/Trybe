import React from 'react';

import QuestionList from '../components/QuestionList';
import QuestionsContext from '../context/QuestionsContext';

class QuestionListPage extends React.Component {
  componentDidMount(){
    const { fetchQuestions } = this.context;
    fetchQuestions();
  }

  render() {
    const { history } = this.props;
    const { isLoading } = this.context;
    return !isLoading ? (
      <>
        <QuestionList />
        <button
          type="button"
          onClick={ () => history.push('/new-question') }
        >
          Nova Pergunta
        </button>
      </>
    ) : <span>Carregando...</span>;
  }
}

QuestionListPage.contextType = QuestionsContext;

export default QuestionListPage;
