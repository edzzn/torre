import * as React from 'react';

export interface SearchProps {
  history: any;
  location: any;
}

class Search extends React.Component<SearchProps, {}> {
  render() {
    return <h1>Search </h1>;
  }
}

export default Search;
