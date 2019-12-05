import styled from 'styled-components';
import { COLOR_PALETTE } from '../../common/colors';

export const InputField = styled.div`
  display: flex;
  height: 40px;
  width: 100%;
`;

export const InputContainer = styled.div`
  display: flex;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 3px 0px inset;
  height: 40px;
  justify-content: center;
  flex-flow: column;
  border-radius: 2px;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(183, 192, 213);
  transition: all 0.25s ease 0s;
`;

export const SubmitButton = styled.span`
  color: #00acc1;
  margin: 0 0 0 8px;
  font-size: 20px;
  padding: 7px 16px;
  vertical-align: center;
  text-transform: uppercase;
  vertical-align: middle;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2), 0 2px 2px rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.12);
`;

export const SearchBoxInput = styled.input`
  display: flex;
  font-size: 16px;
  height: 30px;
  color: rgba(0, 0, 0, 0.57);
  margin-left: 5px;
  outline: none;
  border-style: none;
`;
