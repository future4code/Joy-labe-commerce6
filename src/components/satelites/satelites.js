import React from 'react'
import styled from 'styled-components';
import { SateliteCard } from './sateliteCard';

const Ordem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  select {
    color: grey;
    border-radius: 20px;
  }
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  padding: 16px;
`

export class Satelites extends React.Component {
  state = {
    ordem: 'DECRESCENTE'
  }

  //Fazendo o select da ordem funcionar
  onChangeOrdem = (event) => {
    this.setState({ordem: event.target.value})
  }

  //função para filtrar e exibir lista
  gerarListaFiltrada = () => {
    //acessando o array de satelites
    return this.props.satelites

    //filtrando por valor minimo
    .filter((satelite) => {
        if (satelite.preco > this.props.valorMinimo) {
          return satelite
        } 
      })

    //filtrando por valor máximo
    .filter((satelite) => {
      if (satelite.preco < this.props.valorMaximo) {
        return satelite
      }
    })

    //Buscando por nome
    .filter((satelite) => {
      if (satelite.nome.includes(this.props.buscaNome)) {
        return satelite
      } 
    })

    //usando sort para inverter o array
    .sort((maior, menor)=> {
      if (this.state.ordem === 'CRESCENTE')
        return maior.preco - menor.preco
    })

  }
    render() {
      const listaFiltrada = this.gerarListaFiltrada()

      return <div>
      <Ordem>
        <label>
          Ordem:
          <select value={this.state.ordem} onChange={this.onChangeOrdem}>
            <option value={'CRESCENTE'}>Mais barato</option>
            <option value={'DECRESCENTE'}>Mais Caro</option>
          </select>
        </label>
      </Ordem>
      <Grid>
        {listaFiltrada.map((satelite) => {
          return <SateliteCard
            satelite={satelite}
          />
        })}
      </Grid>
    </div>
    }
}