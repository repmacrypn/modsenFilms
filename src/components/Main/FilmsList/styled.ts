import styled from 'styled-components'

export const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(267px, 1fr));
  grid-gap: 20px;
  justify-items: center;
  padding: 28px 13px 10px;

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`
