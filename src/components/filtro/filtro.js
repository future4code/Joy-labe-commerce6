import React from 'react'
import styled from 'styled-components';

const ContainerFiltro = styled.div`
  border: 3px dashed white;
  padding: 8px;
  h3 {
      color: white;
  }
`;

const ContainerInput = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 8px;
  color: white;
  input {
      color: white;
  }
`

export class Filtro extends React.Component {
    render() {

      return <ContainerFiltro>
      <h3>Filtros</h3>
        <ContainerInput>
          Valor mínimo:
          <input
            type="number"
            value={this.props.valorMinimo}
            onChange={this.props.onChangeValorMinimo}
          />
        </ContainerInput>
        <ContainerInput>
          Valor máximo:
          <input
            type="number"
            value={this.props.valorMaximo}
            onChange={this.props.onChangeValorMaximo}
          />
        </ContainerInput>
        <ContainerInput>
          Busca por nome:
          <input
            type="text"
            value={this.props.buscaNome}
            onChange={this.props.onChangeBuscaNome}
          />
        </ContainerInput>
    </ContainerFiltro>
    }
}