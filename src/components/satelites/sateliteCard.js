import React from 'react'
import styled from 'styled-components';

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;

  img {
    height: 100%;
    width: 100%;

  }
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
    //váriavel para guardar dados da props
    const satelite = this.props.satelite

    return <CardContainer>
      <img src={satelite.foto} alt="Imagem produto"/>
      <SateliteInfo>
        <p>{satelite.nome}</p>
        <p>R${satelite.preco},00</p>

        {/* pegando ID do produto no onClick */}
        
        <Adicionar onClick={() => this.props.adicionarAoCarrinho(satelite.id)}>
          Adicionar ao carrinho
        </Adicionar>
      </SateliteInfo>
    </CardContainer>
  }
}
