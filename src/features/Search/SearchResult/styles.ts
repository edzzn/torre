import styled from 'styled-components';
import { COLOR_PALETTE } from '../../../common/colors';

export const SearchResultContainer = styled.div`
  position: fixed;
  margin-top: 56px;
  margin-left: 400px;
  height: 100%;
  width: calc(100% - 400px);
  background-color: ${COLOR_PALETTE.LIGHT_BLUE};
`;

export const ResultsColumn = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  align-items: center;
  height: calc(100% - 56px);
`;
