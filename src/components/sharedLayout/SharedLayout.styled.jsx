import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  padding: 24px;
  max-width: 1280px;
  min-width: 310px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint}) {
    padding: 48px;
  }
`;
export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  box-shadow: 4px 1px 4px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
  padding: 20px;
  width: 100%;
`;
export const Main = styled.main`
  padding: 20px;
`