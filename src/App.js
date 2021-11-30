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
    preco: 66.66666,
    foto: {sat1}
  },
  {
    id: 2,
    nome: 'Satélite Bonitinho',
    preco: 8.888,
    foto: {sat2}
  },
  {
    id: 3,
    nome: 'Satelezinho',
    preco: 44.444444444,
    foto: {sat3}
  },
  {
    id: 4,
    nome: 'Sateletezão',
    preco: 8666.66666888,
    foto: {sat4}
  },
  {
    id: 5,
    nome: 'Satélite Esquisito',
    preco: 555.55555555555,
    foto: {sat5}
  },
  {
    id: 6,
    nome: 'Satélite Feio',
    preco: 87.87878787878,
    foto: {sat6}
  }
]


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header>
          <img src={spaceship} alt="nave espacial" />
          <h1>AstroShop</h1>
        </Header>

        <Main>

          <Filtro></Filtro>

          <Satelites/>

          <Carrinho></Carrinho>

        </Main>
  
      </div>
    );
  }
}

export default App;
