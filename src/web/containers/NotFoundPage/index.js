/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 */

import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import messages from './messages';
import Button from 'components/Button';

export const NotFound = (props) => (
  <article>
    <h1>{messages.header}</h1>
    <Button
      handleRoute={function redirect() {
        props.dispatch(push('/'));
      }}
    >
    {messages.homeButton}
    </Button>
  </article>
);

NotFound.propTypes = {
  dispatch: React.PropTypes.func,
};

// Wrap the component to inject dispatch and state into it
export default connect()(NotFound);
