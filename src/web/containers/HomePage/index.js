/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import Helmet from 'react-helmet';

import messages from './messages';
import { createStructuredSelector } from 'reselect';

import {
  selectRepos,
  selectLoading,
  selectError,
} from 'containers/App/selectors';

import {
  selectUsername,
} from './selectors';

import { changeUsername } from './actions';
import { loadRepos } from '../App/actions';

import { FormattedMessage } from 'react-intl';
import RepoListItem from 'containers/RepoListItem';
import List from 'components/List';
import ListItem from 'components/ListItem';
import LoadingIndicator from 'components/LoadingIndicator';

import styles from './styles.css';

export const HomePage = (props) => {
  const { username, loading, error, repos, onSubmitForm, onChangeUsername } = props;

  let mainContent = null;

  // Show a loading indicator when we're loading
  if (loading) {
    mainContent = (<List component={LoadingIndicator} />);

  // Show an error if there is one
  } else if (error !== false) {
    const ErrorComponent = () => (
      <ListItem item={'Something went wrong, please try again!'} />
    );
    mainContent = (<List component={ErrorComponent} />);

  // If we're not loading, don't have an error and there are repos, show the repos
  } else if (repos !== false) {
    mainContent = (<List items={repos} component={RepoListItem} />);
  }

  return (
    <article>
      <Helmet
        title="Home Page"
        meta={[
          { name: 'description', content: 'A React.js Boilerplate application homepage' },
        ]}
      />
      <div>
        <section className={`${styles.textSection} ${styles.centered}`}>
          <h2>
            <FormattedMessage {...messages.startProjectHeader} />
          </h2>
          <p>
            <FormattedMessage {...messages.startProjectMessage} />
          </p>
        </section>
        <section className={styles.textSection}>
          <h2>
            <FormattedMessage {...messages.trymeHeader} />
          </h2>
          <form className={styles.usernameForm} onSubmit={onSubmitForm}>
            <label htmlFor="username">
              <FormattedMessage {...messages.trymeMessage} />
              <span className={styles.atPrefix}>
                <FormattedMessage {...messages.trymeAtPrefix} />
              </span>
              <input
                id="username"
                className={styles.input}
                type="text"
                placeholder="mxstbr"
                value={username}
                onChange={onChangeUsername}
              />
            </label>
          </form>
          {mainContent}
        </section>
      </div>
    </article>
  );
};

HomePage.propTypes = {
  loading: React.PropTypes.bool,
  error: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.bool,
  ]),
  repos: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.bool,
  ]),
  onSubmitForm: React.PropTypes.func,
  username: React.PropTypes.string,
  onChangeUsername: React.PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: (evt) => dispatch(changeUsername(evt.target.value)),
    onSubmitForm: (evt) => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadRepos());
    },

    dispatch,
  };
}

const mapStateToProps = createStructuredSelector({
  repos: selectRepos(),
  username: selectUsername(),
  loading: selectLoading(),
  error: selectError(),
});

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
