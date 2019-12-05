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

export const Centered = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const EmptyStateContainer = styled.div`
  width: 760px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  margin: 32px;
  padding: 32px;
`;

export interface EmptyStateLabelProps {
  highlighted?: boolean;
}

export const EmptyStateLabel = styled.span`
  font-size: 20px;
  line-height: 2;
  letter-spacing: 2px;
  font-weight: ${(props: EmptyStateLabelProps) =>
    props.highlighted ? 'bold' : 'normal'};
  font-style: ${(props: EmptyStateLabelProps) =>
    props.highlighted ? 'italic' : 'normal'};
`;

export const EmptyStateImageContainer = styled.div`
  display: flex;
  margin-top: 20px;
`;

export const EmptyStateImage = styled.img`
  display: flex;
`;
