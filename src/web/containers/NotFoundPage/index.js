/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 */

import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

export function NotFound(props) {
  return (
    <article>
      <button
        handleRoute={function redirect() {
          props.dispatch(push('/'));
        }}
      >
      </button>
    </article>
  );
}

NotFound.propTypes = {
  dispatch: React.PropTypes.func,
};

// Wrap the component to inject dispatch and state into it
export default connect()(NotFound);
