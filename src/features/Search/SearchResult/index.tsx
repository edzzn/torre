import * as React from 'react';
import {
  SearchResultContainer,
  ResultsColumn,
  Centered,
  EmptyStateContainer,
  EmptyStateLabel,
  EmptyStateImageContainer,
  EmptyStateImage,
  LoadMoreButton
} from './styles';
import UserCard from '../../../components/UserCard';
import { LOADING_IMAGE, NO_USER_FOUND_IMAGE } from '../../../common/constants';
import { SEARCH_EMPTY_STATE, SEARCH_RESULT_STATE } from '../../../common/texts';

export interface SearchResultProps {
  users: User[];
  isLoading: boolean;
  searchTerm: string;

  onLoadMoreUsers: () => void;
}

class SearchResult extends React.Component<SearchResultProps, {}> {
  renderUsers = () => {
    const userCards = this.props.users.map(user => (
      <UserCard key={user.username} user={user} />
    ));
    return userCards;
  };

  renderEmptyState = () => {
    return (
      <EmptyStateContainer>
        <EmptyStateLabel>
          {SEARCH_EMPTY_STATE.TITLE}
          <EmptyStateLabel highlighted>{this.props.searchTerm}</EmptyStateLabel>
        </EmptyStateLabel>
        <EmptyStateLabel> {SEARCH_EMPTY_STATE.DESCRIPTION}</EmptyStateLabel>
        <EmptyStateImageContainer>
          <EmptyStateImage src={NO_USER_FOUND_IMAGE} />
        </EmptyStateImageContainer>
      </EmptyStateContainer>
    );
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
            {this.props.users && this.props.users.length > 0 ? (
              <>
                {this.renderUsers()}

                <LoadMoreButton onClick={() => this.props.onLoadMoreUsers()}>
                  {SEARCH_RESULT_STATE.LOAD_MORE}
                </LoadMoreButton>
              </>
            ) : (
              this.renderEmptyState()
            )}
          </ResultsColumn>
        )}
      </SearchResultContainer>
    );
  }
}

export default SearchResult;
