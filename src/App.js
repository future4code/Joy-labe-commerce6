import React from 'react';
import './App.css';
import styled from 'styled-components'
import spaceship from './img/spaceship.png'
import sat1 from './img/sat1.png'
import sat2 from './img/sat2.png'
import sat3 from './img/sat3.png'
import sat4 from './img/sat4.png'
import sat5 from './img/sat5.png'
import sat6 from './img/sat6.png'
import { Filtro } from './components/filtro/filtro';
import { Carrinho } from './components/carrinho/carrinho';
import { Satelites } from './components/satelites/satelites';


const Main = styled.main`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  padding: 16px;
  gap: 8px;
`

const Header = styled.header`
align-items: center;
display: flex;
flex-direction: column;

img {
  margin-top: 20px;
  height: 25vh;
  width: 25vh;
}
h1 {
  color: white;
  font-size: 8.5vh;
  margin-top: 3px;
}
`

//Array com os satélites
const satelites = [
  {
    id: 1,
    nome: 'Satélite Espião',
    preco: 666,
    foto: sat1
  },
  {
    id: 2,
    nome: 'Satélite Bonitinho',
    preco: 888,
    foto: sat2
  },
  {
    id: 3,
    nome: 'Satélite Flopado',
    preco: 444,
    foto: sat3
  },
  {
    id: 4,
    nome: 'Satélite Quadrado',
    preco: 866,
    foto: sat4
  },
  {
    id: 5,
    nome: 'Satélite Esquisito',
    preco: 555,
    foto: sat5
  },
  {
    id: 6,
    nome: 'Satélite Feio',
    preco: 87,
    foto: sat6
  }
]


class App extends React.Component {
  state = {
    valorMinimo: 0,
    valorMaximo: 1000,
    buscaNome: "Satélite",
    produtosCarrinho: []
  }

  //Fazendo os inputs de filtro funcionar
  onChangeValorMinimo = (event) => {
    this.setState({valorMinimo: event.target.value})
  }

  onChangeValorMaximo = (event) => {
    this.setState({valorMaximo: event.target.value})
  }

  onChangeBuscaNome = (event) => {
    this.setState({buscaNome: event.target.value})
  }

  //funções do carrinho

  render() {
    return (
      <div className="App">
        <Header>
          <img src={spaceship} alt="nave espacial" />
          <h1>AstroShop</h1>
        </Header>

        <Main>

          <Filtro
          valorMinimo={this.state.valorMinimo}
          valorMaximo={this.state.valorMaximo}
          buscaNome={this.state.buscaNome}
          onChangeValorMinimo={this.onChangeValorMinimo}
          onChangeValorMaximo={this.onChangeValorMaximo}
          onChangeBuscaNome={this.onChangeBuscaNome}
          />

          <Satelites
          satelites={satelites}
          valorMinimo={this.state.valorMinimo}
          valorMaximo={this.state.valorMaximo}
          buscaNome={this.state.buscaNome}
          />

          <Carrinho/>

        </Main>
  
      </div>
    );
  }
}

export default App;
