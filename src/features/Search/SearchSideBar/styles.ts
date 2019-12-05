import styled from 'styled-components';

export const SearchSidebarContainer = styled.div`
  display: block;
  position: fixed;
  margin-top: 56px;
  margin-bottom: 56px;
  height: 100%;
  width: 400px;
`;

export const SearchColumn = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  padding: 30px 0 0 20px;
  height: calc(100% - 56px);
`;
