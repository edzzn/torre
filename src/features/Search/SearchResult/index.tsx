import * as React from 'react';
// import { SEARCH_PAGE } from '../../common/texts';
import { SearchResultContainer, ResultsColumn } from './styles';
import UserCard from '../../../components/UserCard';

export interface SearchResultProps {
  users: User[];
}

class SearchResult extends React.Component<SearchResultProps, {}> {
  renderUsers = () => {
    const userCards = this.props.users.map(user => <UserCard user={user} />);
    return userCards;
  };

  render() {
    return (
      <SearchResultContainer>
        <ResultsColumn>{this.props.users && this.renderUsers()}</ResultsColumn>
      </SearchResultContainer>
    );
  }
}

export default SearchResult;
