import React, { Component } from 'react';
import '../css/userList.css';

export default class UserList extends Component {

    displayUserList = () => {
        let { users } = this.props;
        // As mentioned users JSON it should be a string but in the document it is a js object
        //  so it is converted into string. 
        users = JSON.stringify(users);
        users = JSON.parse(users);
        return (
            <div className='userTable'>
                <br />
                <table>
                    <thead>
                        <tr >
                            {/* Build table heading from first object */}
                            {Object.keys(users[0]).map(userDataKey => <th>{userDataKey}</th>)}
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(u => 
                            <tr>{Object.keys(u).map(userDataKey => <td>{u[userDataKey]}</td>)}</tr>
                        )}
                    </tbody>
                </table>
            </div>
        );
    };
        
    render() {
        return(
            <div>
                <div style={{textAlign: 'center', marginTop: '10px'}}>Employee List</div>
                {this.displayUserList()}
            </div>
        );
    }

}