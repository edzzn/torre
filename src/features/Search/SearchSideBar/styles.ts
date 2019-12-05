import styled from 'styled-components';

export const SearchSidebarContainer = styled.div`
  display: block;
  position: fixed;
  margin-top: 56px;
  margin-bottom: 56px;
  height: 100%;
  width: 300px;
`;

export const SearchColumn = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  padding: 0.05rem;
  height: calc(100% - 56px);
`;
