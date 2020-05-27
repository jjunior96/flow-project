import styled from 'styled-components';

export const LayoutWrapper = styled.section`
  display: flex;
`;

export const LayouyMain = styled.main`
  min-height: 100vh;
  padding: 0 3.75rem 0 20rem;
  width: 100%;

  /* padding: 32px; */
  /* max-width: 1140px; */
  margin: 0 auto; /* Centraliza o conteudo */
  margin-left: 4rem;
  /* background: #ddd; */

  img {
    max-width: 100%;
  }
`;

export const SiteHeader = styled.header`
  display: flex;
  /* background: #51868c; */
  /* Title fica na esquerda e navigation na direita */
  justify-content: space-between;
  padding: 20px 0;
  margin-bottom: 32px;
  align-items: center;
`;

export const SiteTitle = styled.div`
  a {
    text-decoration: none;
    font-weight: 900;
    text-transform: uppercase;
  }
`;
