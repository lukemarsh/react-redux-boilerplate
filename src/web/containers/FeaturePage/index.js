/*
 * FeaturePage
 *
 * List all the features
 */
import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import Helmet from 'react-helmet';

import styles from './styles.css';

export class FeaturePage extends React.Component {
  openHomePage = () => {
    this.props.dispatch(push('/'));
  };

  render() {
    return (
      <div>
        <Helmet
          title="Feature Page"
          meta={[
            { name: 'description', content: 'Feature page of React.js Boilerplate application' },
          ]}
        />
        <button handleRoute={this.openHomePage}>
        </button>
      </div>
    );
  }
}

FeaturePage.propTypes = {
  dispatch: React.PropTypes.func,
};

export default connect()(FeaturePage);
