import styled from 'styled-components'

export const Container = styled.footer`
  margin-top: 52px;
  padding: 62px 18px 17px 44px;
  border-top: 1px solid;
  border-color: ${(props) => props.theme.colors.borderColor};

  @media (max-width: 766px) {
    padding: 11px 14px 8px;
  }
`

export const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 40px;
  flex-wrap: wrap;
  margin-bottom: 45px;

  @media (max-width: 583px) {
    margin-bottom: 38px;
  }
`

export const CompanyRights = styled.div`
  display: flex;
  justify-content: center;
  color: ${(props) => props.theme.colors.companyRightsColor};
  font-size: 24px;
  font-weight: 500;

  @media (max-width: 583px) {
    font-size: 12px;
  }
`
