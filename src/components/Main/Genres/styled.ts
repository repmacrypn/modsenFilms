import styled from 'styled-components'

export const GenresWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  padding: 12px 15px;
  border-top: 1px solid #00000030;
  border-bottom: 1px solid #00000030;

  @media (min-width: 243px) and (max-width: 420px) {
    justify-content: flex-start;
    padding-top: 0;
    border: none;
  }
`
