import React from 'react'
import styled from 'styled-components';

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const SateliteInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;

  p {
    margin: 4px 0;
    color: white;
  }
`

const Adicionar = styled.button`
  align-self: center;
  margin-top: 4px;
  color: white;
  background-color: #3262a8;
  border-radius: 20px;
  
`

export class SateliteCard extends React.Component {
  render() {
    return <CardContainer>
      <img src={'https://picsum.photos/200/200?a=1'}/>
      <SateliteInfo>
        <p>Produto</p>
        <p>R$00,00</p>
        <Adicionar>
          Adicionar ao carrinho
        </Adicionar>
      </SateliteInfo>
    </CardContainer>
  }
}
