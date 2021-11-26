import React from 'react';
import { Route, Switch } from 'react-router-dom';
import QuestionsProvider from './context/QuestionsProvider';
import QuestionListPage from './pages/QuestionListPage';
import NewQuestionPage from './pages/NewQuestionPage';
import Header from './components/Header';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <QuestionsProvider>
        <main className="App">
          <Header />
          <section className="main-section">
            <Switch>
              <Route
                path="/new-question"
                component={NewQuestionPage}
              />
              <Route
                exact
                path="/"
                component={QuestionListPage}
              />
            </Switch>
          </section>
        </main>
      </QuestionsProvider>
    );
  }
}

export default App;
