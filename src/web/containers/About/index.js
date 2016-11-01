/*
 *
 * About
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import selectAbout from './selectors';
import styles from './styles.css';

export class About extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.about}>
        <Helmet
          title="About"
          meta={[
            { name: 'description', content: 'Description of About' },
          ]}
        />
      </div>
    );
  }
}

const mapStateToProps = selectAbout();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(About);
