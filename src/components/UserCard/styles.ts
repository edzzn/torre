import styled from 'styled-components';
import { COLOR_PALETTE } from '../../common/colors';

export const Card = styled.a`
  text-decoration: none;
  width: 720px;
  min-height: 100px;
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  overflow: auto;
  background-color: white;
  position: relative;
  z-index: 1;
  margin: 20px 0;
  padding: 20px;
`;

export const CardHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const CardHeaderInfo = styled.div`
  padding-left: 10px;
`;

export const CardContent = styled.div`
  margin-left: 26px;
`;

export const UserName = styled.span`
  font-size: 16px;
  color: ${COLOR_PALETTE.TORRE_BLUE};
  flex-grow: 1;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const UserHeadLine = styled.span`
  display: block;
  color: rgba(0, 0, 0, 0.57);
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ProfilePicture = styled.img`
  height: 70px;
  width: 70px;

  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 5px;
`;
