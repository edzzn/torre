import * as React from 'react';
// import { SEARCH_PAGE } from '../../common/texts';
import { SearchResultContainer } from './styles';
import UserCard from '../../../components/UserCard';

export interface SearchResultProps {
  users: User[];
}

class SearchResult extends React.Component<SearchResultProps, {}> {
  render() {
    const user =
      this.props.users && this.props.users.length > 0
        ? this.props.users[0]
        : null;
    return (
      <SearchResultContainer>
        {user && <UserCard user={this.props.users[0]} />}
      </SearchResultContainer>
    );
  }
}

export default SearchResult;
