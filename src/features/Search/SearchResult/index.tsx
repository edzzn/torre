import * as React from 'react';
// import { SEARCH_PAGE } from '../../common/texts';
import { SearchResultContainer } from './styles';
import UserCard from '../../../components/UserCard';

export interface SearchResultProps {
  // history: any;
  // location: any;
}

class SearchResult extends React.Component<SearchResultProps, {}> {
  render() {
    return (
      <SearchResultContainer>
        <UserCard user={} />
      </SearchResultContainer>
    );
  }
}

export default SearchResult;
