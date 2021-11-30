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

  onChangeOrdem = (event) => {
    this.setState({ordem: event.target.value})
  }
    render() {

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
        {/* card importado de outro componente */}
        <SateliteCard></SateliteCard>

      </Grid>
    </div>
    }
}