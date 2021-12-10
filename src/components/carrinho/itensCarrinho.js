import React from 'react'
import styled from 'styled-components';

const Itens = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 4px;
  align-items: center;

  p {
    margin: 0;
    color: white;
  }

  button {
    color: white;
  }
`


export class ItensCarrinho extends React.Component {
  render() {
    return <Itens>
      <p>{this.props.sateliteNoCarrinho.quantidade}x</p>
      <p>{this.props.sateliteNoCarrinho.nome}</p>
      <button onClick={() => this.props.removerDoCarrinho(this.props.sateliteNoCarrinho.id)}>
        Remover
      </button>
    </Itens>
  }
}