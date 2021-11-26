import React, { Component } from 'react';
import SelectEstadosBrasil from '../componentes/EstadosBrasil';

class PersonalForm extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      nome: '',
      mail: '',
      cpf: '',
      endereco: '',
      cidade: '',
      uf: '',
    };
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checkbox : target.value;
    this.setState({ [name]: value });
  }

  render() {
    const {
      nome,
      mail,
      cpf,
      endereco,
      cidade,
      uf,
    } = this.state;

    return (
      <form>
        <fieldset>
          <label htmlFor="Nome">
            Nome:
            <input
              id="Nome"
              name="nome"
              value={ nome }
              type="text"
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="mail">
            E-mail:
            <input
              id="mail"
              name="mail"
              value={ mail }
              type="text"
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="cpf">
            CPF:
            <input
              id="cpf"
              name="cpf"
              value={ cpf }
              type="text"
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="endereco">
            Endereço:
            <input
              id="endereco"
              name="endereco"
              value={ endereco }
              type="text"
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="cidade">
            Cidade:
            <input
              id="cidade"
              name="cidade"
              value={ cidade }
              type="text"
              onChange={ this.handleChange }
            />
          </label>
          <SelectEstadosBrasil
            handleChange={ this.handleChange }
            value={ uf }
          />
        </fieldset>
      </form>
    );
  }
}
export default PersonalForm;
// ok Nome - Texto
// ok Email - Texto
// ok CPF - Texto
// ok Endereço - Texto
// ok Cidade - Texto
// ok Estado - Select com todos os estados do Brasil
// Um botão com o texto Enviar e que redireciona para a página ProfessionalForm
