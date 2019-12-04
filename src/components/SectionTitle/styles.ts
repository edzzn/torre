import styled from 'styled-components';
import { COLOR_PALETTE } from '../../common/colors';

export const SectionContainer = styled.nav`
  width: 100%;
  background-color: ${COLOR_PALETTE.TORRE_GREY};
  height: 56px;
  z-index: 9;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
`;

export const Container = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const SectionLabel = styled.span`
  margin: 0 10px;
  color: #333;
  text-decoration: none;
  font-weight: 700;
  font-size: 20px;
  line-height: 60px;
  margin-left: 12px;
`;
