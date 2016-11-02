/**
 * RepoListItem
 *
 * Lists the name and the issue count of a repository
 */

import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import { selectCurrentUser } from 'containers/App/selectors';
import ListItem from 'components/ListItem';
import A from 'components/A';

import styles from './styles.css';

export const RepoListItem = (props) => { // eslint-disable-line react/prefer-stateless-function
  const { item, currentUser } = props;
  let nameprefix = '';

  // If the repository is owned by a different person than we got the data for
  // it's a fork and we should show the name of the owner
  if (item.owner.login !== currentUser) {
    nameprefix = `${item.owner.login}/`;
  }

  // Put together the content of the repository
  const content = (
    <div className={styles.linkWrapper}>
      <A
        className={styles.linkRepo}
        href={item.html_url}
        target="_blank"
      >
        {nameprefix + item.name}
      </A>
      <A
        className={styles.linkIssues}
        href={`${item.html_url}/issues`}
        target="_blank"
      >
        <p>{item.open_issues_count}</p>
      </A>
    </div>
  );

  // Render the content into a list item
  return (
    <ListItem key={`repo-list-item-${item.full_name}`} item={content} />
  );
};

RepoListItem.propTypes = {
  item: React.PropTypes.object,
  currentUser: React.PropTypes.string,
};

export default connect(createSelector(
  selectCurrentUser(),
  (currentUser) => ({ currentUser })
))(RepoListItem);
