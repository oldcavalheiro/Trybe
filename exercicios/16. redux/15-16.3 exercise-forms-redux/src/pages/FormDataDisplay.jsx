import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class FormDataDisplay extends Component {
  render() {
    const { professionalInputs, personalInputs } = this.props;
    const { nome, email, cpf, endereco, cidade, estado } = personalInputs;
    const { curriculo, cargo, descricao } = professionalInputs;
    return (
      <div>
        <h2>Dados enviados</h2>
        <div>
          <b>Nome:</b>
          { ' ' }
          {nome}
        </div>
        <div>
          <b>Email:</b>
          { ' ' }
          { email }
        </div>
        <div>
          <b>CPF:</b>
          { ' ' }
          { cpf }
        </div>
        <div>
          <b>Endereço:</b>
          { ' ' }
          { endereco }
        </div>
        <div>
          <b>Cidade:</b>
          { ' ' }
          { cidade }
        </div>
        <div>
          <b>Estado:</b>
          { ' ' }
          { estado }
        </div>
        <div>
          <b>Currículo:</b>
          { ' ' }
          { curriculo }
        </div>
        <div>
          <b>Cargo:</b>
          { ' ' }
          { cargo }
        </div>
        <div>
          <b>Descrição do cargo:</b>
          {' '}
          { descricao }
        </div>
      </div>
    );
  }
}

FormDataDisplay.propTypes = {
  professionalInputs: PropTypes.objectOf(PropTypes.string).isRequired,
  personalInputs: PropTypes.objectOf(PropTypes.string).isRequired,
};

const mapStateToProps = (state) => ({
  personalInputs: state.formReducer.personalInputs,
  professionalInputs: state.formReducer.professionalInputs,
});


export default connect(mapStateToProps)(FormDataDisplay);
