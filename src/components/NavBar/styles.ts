import styled from 'styled-components';
import { COLOR_PALETTE } from '../../common/colors';

export const Navbar = styled.nav`
  width: 100%;
  background-color: ${COLOR_PALETTE.TORRE_GREY};
  /* background-color: red; */
  height: 56px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
`;

export const Container = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Logo = styled.div`
  margin: 0 10px;
  color: #333;
  text-decoration: none;
  font-weight: 700;
  font-size: 40px;
  line-height: 60px;
  outline: none;
`;

export const NavLinkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  color: #6b6b6b;
  font-size: 20px;
  margin-right: 10px;
  text-decoration: none;
  font-weight: 700;
  line-height: 60px;
`;

export const NavLinkItem = styled.div`
  min-width: 64px;
  height: 60px;
  width: 100px;
  text-align: center;
  margin: 0 5px;

  &:hover {
    background-color: ${COLOR_PALETTE.TORRE_GREY_2};
  }
`;
