import React from 'react';
import { connect } from 'react-redux'
import UserList from '../component/UserList';

class UserListPage extends React.Component {
    state = {};
  
    render() {
      const { users } = this.props;
      return (
        <div>
          <UserList users={users} />
        </div>
      );
    }
  }

const mapStateToProps = state => ({
  users: state.user
})

export default connect(
  mapStateToProps, null
)(UserListPage)
