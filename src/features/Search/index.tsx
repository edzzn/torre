import * as React from 'react';
import SectionTitle from '../../components/SectionTitle';
// import { SEARCH_PAGE } from '../../common/texts';

import { connect } from 'react-redux';
import { SearchContainer } from './styles';
import SearchSidebar from './SearchSideBar';
import SearchResults from './SearchResult';
import { RootState } from '../../state/types';
import { getUsersByName } from './state/actions';

export interface SearchProps {
  history: any;
  location: any;

  users: User[];
  isSearching: boolean;

  getUsersByName: (name: String, offset?: number, limit?: number) => void;
}

export interface SearchState {
  searchTerm: string;
}

class Search extends React.Component<SearchProps, SearchState> {
  constructor(props: SearchProps) {
    super(props);
    this.state = {
      searchTerm: ''
    };
  }

  componentDidMount() {
    this.props.getUsersByName('', 10);
  }

  onSearchTermChange = (newSearchTerm: string) => {
    this.setState({
      searchTerm: newSearchTerm
    });
  };

  onSearchClick = () => {
    this.props.getUsersByName(this.state.searchTerm);
  };

  loadMoreUsers = () => {
    const offset = this.props.users.length;
    this.props.getUsersByName(this.state.searchTerm, offset);
  };

  public render() {
    return (
      <SearchContainer>
        <SearchSidebar
          searchTerm={this.state.searchTerm}
          onSearchTermChange={this.onSearchTermChange}
          onSearchClick={this.onSearchClick}
        />
        <SearchResults
          users={this.props.users}
          isLoading={this.props.isSearching}
          searchTerm={this.state.searchTerm}
          onLoadMoreUsers={this.loadMoreUsers}
        />
      </SearchContainer>
    );
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    users: state.search.users,
    isSearching: state.search.isSearching
  };
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    getUsersByName: (name: String, offset?: number, limit?: number) => {
      dispatch(getUsersByName(name, offset, limit));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
