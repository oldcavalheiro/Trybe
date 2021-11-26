import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import FormDataDisplay from './pages/FormDataDisplay';
import PersonalForm from './pages/PersonalForm';
import ProfessionalForm from './pages/ProfessionalForm';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <p><Link to="/">PersonalForm</Link></p>
        <p><Link to="/professionalForm">ProfessionalForm</Link></p>
        <p><Link to="/formDisplay">FormDataDisplay</Link></p>
        <Switch>
          <Route exact path="/professionalForm" component={ ProfessionalForm } />
          <Route exact path="/formDisplay" component={ FormDataDisplay } />
          <Route exact path="/" component={ PersonalForm } />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
