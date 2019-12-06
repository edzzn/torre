import styled from 'styled-components';

export const SearchSidebarContainer = styled.div`
  display: block;
  position: fixed;
  margin-top: 56px;
  margin-bottom: 56px;
  height: 100%;
  width: 400px;

  background: linear-gradient(0deg, #fff 0, hsla(0, 0%, 100%, 0) 25%),
    url('https://torre.co/img/landing-background.210aab48.png') 35% #fff;
  background-size: 150%;
`;

export const SearchColumn = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  padding: 30px 0 0 20px;
  height: calc(100% - 56px);
`;
