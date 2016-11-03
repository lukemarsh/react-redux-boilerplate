/**
 * Test the repo list item
 */

import expect from 'expect';
import { shallow, mount } from 'enzyme';
import React from 'react';

import { RepoListItem } from '../index';
import ListItem from 'web/components/ListItem';

describe('<RepoListItem />', () => {
  let item;

  // Before each test reset the item data for safety
  beforeEach(() => {
    item = {
      owner: {
        login: 'lukemarsh',
      },
      html_url: 'https://github.com/lukemarsh/react-redux-boilerplate',
      name: 'react-redux-boilerplate',
      open_issues_count: 20,
      full_name: 'lukemarsh/react-redux-boilerplate',
    };
  });

  it('should render a ListItem', () => {
    const renderedComponent = shallow(
      <RepoListItem item={item} />
    );
    expect(renderedComponent.find(ListItem).length).toEqual(1);
  });

  it('should not render the current username', () => {
    const renderedComponent = mount(
      <RepoListItem item={item} currentUser={item.owner.login} />
    );
    expect(renderedComponent.text().indexOf(item.owner.login)).toBeLessThan(0);
  });

  it('should render usernames that are not the current one', () => {
    const renderedComponent = mount(
      <RepoListItem item={item} currentUser="nikgraf" />
    );
    expect(renderedComponent.text().indexOf(item.owner.login)).toBeGreaterThan(-1);
  });

  it('should render the repo name', () => {
    const renderedComponent = mount(
      <RepoListItem item={item} />
    );
    expect(renderedComponent.text().indexOf(item.name)).toBeGreaterThan(-1);
  });

  it('should render the issue count', () => {
    const renderedComponent = mount(
      <RepoListItem item={item} />
    );
    expect(renderedComponent.text().indexOf(item.open_issues_count)).toBeGreaterThan(1);
  });
});
