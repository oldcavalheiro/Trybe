import React, { Component } from 'react';
import './Form.css'

class EstadoFavorito extends Component {
  render() {
    // value === this.state.estadoFavorito from Form
    // handleChange from Form
    // props from Form
    const { value, handleChange } = this.props;
    console.log(`no filho com value ${value}`);

    let error = undefined
    if (value.length < 5) error = "texto muito pequeno!"

    return (
      <label>
        Qual é o seu Estado favorito?
        <textarea
          name='estadoFavorito'
          value={ value }
          onChange={ handleChange }
        />
        <span>{ error !== undefined ? error : '' }</span>
      </label>
    ); // if want handleError create it in father
  }
}

export default EstadoFavorito;