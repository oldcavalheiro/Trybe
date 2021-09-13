import React, { Component } from 'react';
import EstadoFavorito from './EstadoFavorito'
import './Form.css'

class Form extends Component {
  constructor() {
    super()

    // bind function handleChange to this class
    this.handleChange = this.handleChange.bind(this);

    // initial state
    this.state = {
      estadoFavorito: '',
      nome: '',
      email: '',
      idade: 0,
      vaiComparecer: false,
      palavraChaveFavorita: '',
      // *erroPai: ''
    }
  }

  // *handleErrors(){}

  // target === Email
  handleChange({ target }) {
    console.log('mudando estado do pai');
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value

    this.setState({ [name]: value })
  }

  render() {
    return (
      <div>
        <h1>Estados e React: ferramenta incrível ou regionalismo?</h1>
        <form className='form'>
          <EstadoFavorito
            value={ this.state.estadoFavorito }
            handleChange={ this.handleChange }
          />

          <label>
            Email
            <input
              name='email'
              type='email'
              value={ this.state.email }
              onChange={ this.handleChange }
            />
          </label>

          <label>
            Nome
            <input
              name="nome"
              type="text"
              value={ this.state.nome }
              onChange={ this.handleChange }
            />
          </label>
        </form>

        <label>
          Idade
          <input
            name='idade'
            type='number'
            value={ this.state.idade }
            onChange={ this.handleChange }
          />
        </label>

        <label>
          Vai comparecer à conferência?
          <input
            name='vaiComparecer'
            type='checkbox'
            value={ this.state.email }
            onChange={ this.handleChange }
          />
        </label>

        <label>
          Escolha sua palavra chave favorita:
          <select
            name='palavraChaveFavorita'
            value={ this.state.palavraChaveFavorita }
            onChange={ this.handleChange }
          >
            <option value='Estado'>Estado</option>
            <option value='Evento'>Evento</option>
            <option value='Props'>Props</option>
            <option value='hooks'>Hooks</option>
          </select>
        </label>
      </div>
    );
  }
}

export default Form;
