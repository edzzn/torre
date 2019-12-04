import styled from 'styled-components';
import { COLOR_PALETTE } from '../../../common/colors';

export const SearchResultContainer = styled.div`
  display: flex;
  flex: 3;
  padding: 1rem;
  background-color: ${COLOR_PALETTE.LIGHT_BLUE};
  flex-direction: column;
  overflow-y: scroll;
  padding-top: 60px;
  align-items: center;
`;
