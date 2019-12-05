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

  getUsersByName: (name: String, limit?: number) => void;
}

class Search extends React.Component<SearchProps, {}> {
  componentDidMount() {
    this.props.getUsersByName('', 10);
  }

  public render() {
    return (
      <SearchContainer>
        <SearchSidebar>
          <p onClick={() => this.props.getUsersByName('Edisson')}>
            Click to search
          </p>
        </SearchSidebar>
        <SearchResults users={this.props.users} />
      </SearchContainer>
    );
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    users: state.search.users
  };
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    getUsersByName: (name: String, limit?: number) => {
      dispatch(getUsersByName(name, limit));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
