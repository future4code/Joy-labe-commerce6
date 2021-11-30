import React from 'react'
import styled from 'styled-components';

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
    render() {

      return <CarrinhoContainer>
      <h3>Carrinho:</h3>
      <ListaCarrinho>
        <p>Produto 1</p>
        <p>Produto 2</p>
      </ListaCarrinho>
      <p>Valor total: R$1,00</p>
    </CarrinhoContainer>
    }
}