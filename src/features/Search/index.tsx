import * as React from 'react';
import SectionTitle from '../../components/SectionTitle';
import { SEARCH_PAGE } from '../../common/texts';
import { SearchContainer } from './styles';
import SearchSidebar from './SearchSideBar';
import SearchResults from './SearchResult';

export interface SearchProps {
  history: any;
  location: any;
}

class Search extends React.Component<SearchProps, {}> {
  render() {
    return (
      <SearchContainer>
        <SearchSidebar />
        <SearchResults />
      </SearchContainer>
    );
  }
}

export default Search;
