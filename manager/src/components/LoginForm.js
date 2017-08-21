import React, { Component } from 'react';
import { connect }  from 'react-redux';

import { Card, CardSection, Input, Button } from './common';
import { emailChanged } from '../actions';

class LoginForm extends Component {
  onEmailChange(text) {
    // Binded in the last line using connect()
    this.props.emailChanged(text);
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
          label="Email"
          placeholder="email@email.com"
          onChangeText={this.onEmailChange.bind(this)}
          value={this.props.email}
          />
        </CardSection>
        <CardSection>
          <Input
          secureTextEntry
          label="Password"
          placeholder="Password"
          />
        </CardSection>

        <CardSection>
          <Button>
            Login
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  const { email } = auth;

  return {
    email
  };
};

// Bind actioncreator
export default connect(mapStateToProps, { emailChanged })(LoginForm);
