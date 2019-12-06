import * as React from 'react';
import {
  SubmitButton,
  InputField,
  InputContainer,
  SearchBoxInput
} from './styles';
import { KEYS } from '../../common/constants';

export interface SearchInputProps {
  value?: string;
  onInputChange: (value: string) => void;
  onSubmit: () => void;
}

export class SearchInput extends React.Component<SearchInputProps> {
  handleChange = (e: any) => {
    if (e && e.target && e.target.value) {
      this.props.onInputChange(e.target.value);
    } else {
      this.props.onInputChange('');
    }
  };

  onKeyPress = (event: any) => {
    if (event && event.key) {
      switch (event.key) {
        case KEYS.ENTER:
          this.props.onSubmit();
          break;
      }
    }
  };

  render() {
    return (
      <InputField onKeyDown={this.onKeyPress}>
        <InputContainer>
          <SearchBoxInput
            placeholder='Search...'
            type='text'
            value={this.props.value}
            onChange={this.handleChange}
          />
        </InputContainer>
        <SubmitButton onClick={() => this.props.onSubmit()}>go</SubmitButton>
      </InputField>
    );
  }
}

export default SearchInput;
