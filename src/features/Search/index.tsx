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

  getUsersByName: (name: String) => void;
}

class Search extends React.Component<SearchProps, {}> {
  public render() {
    return (
      <>
        <SearchContainer>
          <SearchSidebar />
          <SearchResults users={this.props.users} />
        </SearchContainer>

        <p>132</p>
        <p>{JSON.stringify(this.props.users)}</p>
        <p onClick={() => this.props.getUsersByName('Edisson')}>CLICK</p>
      </>
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
    getUsersByName: (name: String) => {
      dispatch(getUsersByName(name));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
