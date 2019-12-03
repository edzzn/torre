import * as React from 'react';

export interface UserProps {
  match: any;
  history: any;
  location: any;
}

class User extends React.Component<UserProps, {}> {
  render() {
    const userId = this.props.match.params.userId;
    return <h1>User: {userId}</h1>;
  }
}

export default User;
