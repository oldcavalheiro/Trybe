import React from 'react'
import { connect } from 'react-redux';

import * as movieActions from '../actions/movieActions';

class Sidebar extends React.Component {

  render() {
    const { categoryGlobal, dispararAcaoSelecionarFilme } = this.props;
    return (
      <aside>
        {
          categoryGlobal.map(category => (
            <div key={category.id}>
              <h3>{category.name}</h3>
              <ul>
                {
                  category.movies.map(movie => (
                    <li key={movie.id}>
                      <button type='button' onClick={() => dispararAcaoSelecionarFilme(category, movie)}>
                        {movie.title} was released in {movie.released}
                      </button>
                    </li>
                  ))
                }
              </ul>
            </div>
          ))
        }
      </aside>
    )
  }
}

function mapStateToProps(state){
  return {
    categories: state.movie.categories,
  }
}

function mapDispatchToProps(dispatch){
  return {
    dispararAcaoSelecionarFilme: (categoryGlobal, movie) => dispatch(movieActions.selectMovie(categoryGlobal, movie))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);