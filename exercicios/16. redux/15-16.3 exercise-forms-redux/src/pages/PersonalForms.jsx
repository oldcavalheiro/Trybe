import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { setPersonalValue } from '../redux/action/action';
import Input from '../components/Input';
import Button from '../components/Button';
import Select from '../components/Select';

class PersonalForm extends Component {
  constructor() {
    super();

    this.state = {
      nome: '',
      email: '',
      cpf: '',
      endereco: '',
      cidade: '',
      estado: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
  }


  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }


  onSubmitForm() {
    const { history, dispatchSetValue } = this.props;
    dispatchSetValue(this.state);
    history.push('/professionalform');
  }

  render() {
    const { nome, email, cpf, endereco, cidade, estado } = this.state;
    const states = [
      'Rio de Janeiro',
      'Minas Gerais',
      'Amapá', 'Amazonas', 'São Paulo', 'Ceará', 'Distrito Federal'];
    return (
      <form>
        <fieldset>
          <Input
            label="Qual o seu nome: "
            type="text"
            onChange={ this.handleChange }
            value={ nome }
            name="nome"
            required
          />
          <Input
            label="email: "
            type="text"
            onChange={ this.handleChange }
            value={ email }
            name="email"
            required
          />
          <Input
            label="cpf: "
            type="text"
            onChange={ this.handleChange }
            value={ cpf }
            name="cpf"
            required
          />
          <Input
            label="endereco: "
            type="text"
            onChange={ this.handleChange }
            value={ endereco }
            name="endereco"
            required
          />
          <Input
            label="cidade: "
            type="text"
            onChange={ this.handleChange }
            name="cidade"
            value={ cidade }
          />
          <Select
            defaultOption="Selecione"
            onChange={ this.handleChange }
            value={ estado }
            label="Estado: "
            id="estado"
            name="estado"
            options={ states }
          />
          <Button type="button" label="Enviar" onClick={ this.onSubmitForm } />
        </fieldset>
      </form>
    );
  }
}

PersonalForm.propTypes = {
  dispatchSetValue: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  dispatchSetValue: (form) => dispatch(setPersonalValue(form)),
}
);


export default connect(null, mapDispatchToProps)(PersonalForm);

