import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  padding: 15px 8px;

  @media (min-width: 243px) and (max-width: 420px) {
    padding: 15px;
  }
`
