import React from 'react'
import styled from 'styled-components';
import { ItensCarrinho } from './itensCarrinho';

const CarrinhoContainer = styled.div`
  border: 3px dashed white;
  padding: 8px;
  color: white;
  h3 {
      color: white;
  }
`;

const ListaCarrinho = styled.div`
  display: grid;
  gap: 8px;
  color: white;
`

export class Carrinho extends React.Component {
  //função para calcular o preço total do carrinho 

  valorTotal = () => {
    //váriavel para guardar o total
    let total = 0

    //usar o for para mapear o array do carrinho
    for(let satelite of this.props.satelitesCarrinho) {
      total += satelite.preco * satelite.quantidade
    }
    return total
  }

    render() {

      return <CarrinhoContainer>
      <h3>Carrinho:</h3>
      <ListaCarrinho>
        {this.props.satelitesCarrinho.map((satelite) => {
          return <ItensCarrinho
                    sateliteNoCarrinho={satelite}
                    removerDoCarrinho={this.props.removerDoCarrinho}
                 /> 
        })}
      </ListaCarrinho>
      <p>R${this.valorTotal()},00</p>
    </CarrinhoContainer>
    }
}