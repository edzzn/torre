import * as React from 'react';
// import { SEARCH_PAGE } from '../../common/texts';
import { SearchSidebarContainer } from './styles';

export interface SearchSidebarProps {
  // history: any;
  // location: any;
}

class SearchSidebar extends React.Component<SearchSidebarProps, {}> {
  render() {
    return (
      <SearchSidebarContainer>
        <p>Search input</p>
        <p>Search input</p>
      </SearchSidebarContainer>
    );
  }
}

export default SearchSidebar;
