import * as React from 'react';
import { SearchResultContainer, ResultsColumn, Centered } from './styles';
import UserCard from '../../../components/UserCard';
import { LOADING_IMAGE } from '../../../common/constants';

export interface SearchResultProps {
  users: User[];
  isLoading: boolean;
}

class SearchResult extends React.Component<SearchResultProps, {}> {
  renderUsers = () => {
    const userCards = this.props.users.map(user => <UserCard user={user} />);
    return userCards;
  };

  render() {
    return (
      <SearchResultContainer>
        {this.props.isLoading ? (
          <Centered>
            <img src={LOADING_IMAGE} />
          </Centered>
        ) : (
          <ResultsColumn>
            {this.props.users && this.renderUsers()}
          </ResultsColumn>
        )}
      </SearchResultContainer>
    );
  }
}

export default SearchResult;
