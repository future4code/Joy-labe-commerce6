import React from 'react';
import './App.css';
import styled from 'styled-components'
import spaceship from './img/spaceship.png'
import sat1 from './img/sat1.png'
import sat2 from './img/sat2.png'
import sat3 from './img/sat3.png'
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
  height: 30vh;
  width: 30vh;
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
  }
]


class App extends React.Component {
  state = {
    valorMinimo: 0,
    valorMaximo: 1000,
    buscaNome: "Satélite",
    satelitesCarrinho: []
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

  //função carrinho adicionar itens

  adicionarAoCarrinho = (sateliteID) => {
    //usar a variável find para pegar os itens do array satelites
      const adicionarSatelite = satelites.find((satelite) => sateliteID === satelite.id)

    //criar uma variável para armazenar os itens do array satelites no array do carrinho
      const satelistesAdicionados = [...this.state.satelitesCarrinho, {...adicionarSatelite, quantidade: 1}]

    //povoar o array do carrinho com a variável anterior
      this.setState({satelitesCarrinho: satelistesAdicionados})
  }

  //função para remover
  removerDoCarrinho = () => {
    //filtrar o array para retornar produtos com o preço = 0
    const produtoRemovido = this.state.satelitesCarrinho.filter((satelite) => satelite.preco === 0)

    //povoar o array de carrinho com esse filtro que será vazio já que nnehum satelite tem o preço 0
    this.setState({satelitesCarrinho: produtoRemovido})
  }

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
            adicionarAoCarrinho = {this.adicionarAoCarrinho}
          />

          <Carrinho
            satelitesCarrinho={this.state.satelitesCarrinho} 
            removerDoCarrinho={this.removerDoCarrinho}
          />

        </Main>
  
      </div>
    );
  }
}

export default App;
