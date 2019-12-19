import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import '../css/loginPage.css';

class LoginPage extends Component {
    state = {
        username: '',
        password: ''
    };

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    handleSubmit = (event) => {
        const { username, password } = this.state;
        const { history } = this.props;
        if (username === 'hruday@gmail.com' && password === 'hruday123') {
            this.setState({
                isAuthenticated: true
            });
            history.push('/userList');
        } else {
            alert('Please enter valid credentials.');
        }
        event.preventDefault();
    }

    render() {
        const { username, password } = this.state;
        return(
            <div>
                <div className="login-outer-container">
                    <div className="login-container">
                        <form onSubmit={this.handleSubmit}>
                            <div className="header">Login</div>
                            <div className="form-contianer">
                                <label>Username</label>
                                <input name='username' type="text" value={username} onChange={this.handleChange} />
                            </div>
                            <div className="form-contianer">
                                <label>Password</label>
                                <input name='password' type="password" value={password} onChange={this.handleChange} />
                            </div>
                            <div className="form-contianer">
                                <button className="form-button">Login</button>
                            </div>
                        </form>
                    </div>
                    </div>
            </div>
        );
    }
}

export default withRouter(LoginPage);