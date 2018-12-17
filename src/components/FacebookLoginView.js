import FacebookLogin from 'react-facebook-login';
import React, { Component } from 'react';

export default class FacebookLoginView extends Component {
  state = {
    isLoggedIn: false,
    userID: '',
    name: '',
    email: '',
    picture: '',
    token: null,
  };

  responseFacebook = response => {
    console.log(response);
    this.setState({
      isLoggedIn: true,
      userID: response.userID,
      name: response.name,
      email: response.email,
      picture: response.picture.data.url,
      token: response.accessToken,
    });
  };

  componentClicked = () => console.log('componentClicked!');

  render() {
    let fbContent;

    if (this.state.isLoggedIn) {
      localStorage.setItem('token', this.state.token);
      console.log(localStorage);
      fbContent = (
        <div>
          <img src={this.state.picture} alt={this.state.name} />
        </div>
      );
    } else {
      fbContent = (
        <FacebookLogin
          appId="323220401853541"
          autoLoad={true}
          fields="name,email,picture"
          onClick={this.componentClicked}
          callback={this.responseFacebook}
        />
      );
    }
    return <div>{fbContent}</div>;
  }
}
