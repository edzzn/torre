import * as React from 'react';
import { SearchSidebarContainer, SearchColumn } from './styles';
import SearchInput from '../../../components/SearchInput';

export interface SearchSidebarProps {
  searchTerm: string;
  onSearchTermChange: (value: string) => void;
  onSearchClick: () => void;
}

class SearchSidebar extends React.Component<SearchSidebarProps, {}> {
  render() {
    return (
      <SearchSidebarContainer>
        <SearchColumn>
          <SearchInput
            value={this.props.searchTerm}
            onInputChange={this.props.onSearchTermChange}
            onSubmit={this.props.onSearchClick}
          />
        </SearchColumn>
      </SearchSidebarContainer>
    );
  }
}

export default SearchSidebar;
