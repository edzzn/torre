import * as React from 'react';
import { SearchSidebarContainer, SearchColumn } from './styles';

export interface SearchSidebarProps {}

class SearchSidebar extends React.Component<SearchSidebarProps, {}> {
  render() {
    return (
      <SearchSidebarContainer>
        <SearchColumn>{this.props.children}</SearchColumn>
      </SearchSidebarContainer>
    );
  }
}

export default SearchSidebar;
