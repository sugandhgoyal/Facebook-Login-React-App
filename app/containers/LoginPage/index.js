/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

export default class LoginPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    console.log("loggiinnnnnnnnnnnnn");
    return (
      <div>
        <h1>This is the login page </h1>
        <div className="fb-login-button" data-max-rows="1" data-size="large" data-button-type="continue_with" data-show-faces="true"
          data-auto-logout-link="true" data-onlogin="checkLoginState()" data-use-continue-as="true"></div>
      </div>
    );
  }
}
