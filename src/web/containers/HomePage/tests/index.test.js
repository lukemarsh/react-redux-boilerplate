/**
 * Test the HomePage
 */

import expect from 'expect';
import { shallow, mount } from 'enzyme';
import React from 'react';

import { HomePage, mapDispatchToProps } from '../index';
import { changeUsername } from 'core/HomePage/actions';
import { loadRepos } from 'core/App/actions';
import RepoListItem from 'web/components/RepoListItem';
import List from 'web/components/List';
import LoadingIndicator from 'web/components/LoadingIndicator';

describe('<HomePage />', () => {
  it('should render the loading indicator when its loading', () => {
    const renderedComponent = shallow(
      <HomePage {...{ loading: true }} />
    );
    expect(renderedComponent.contains(<List component={LoadingIndicator} />)).toEqual(true);
  });

  it('should render an error if loading failed', () => {
    const renderedComponent = mount(
      <HomePage
        loading={false}
        error={{ message: 'Loading failed!' }}
      />
    );
    expect(
      renderedComponent
        .text()
        .indexOf('Something went wrong, please try again!')
      ).toBeGreaterThan(-1);
  });

  it('should render the repositories if loading was successful', () => {
    const currentUser = 'lukemarsh';
    const repos = [{
      owner: {
        login: 'lukemarsh',
      },
      html_url: 'https://github.com/lukemarsh/react-redux-boilerplate',
      name: 'react-redux-boilerplate',
      open_issues_count: 20,
      full_name: 'lukemarsh/react-redux-boilerplate',
    }];
    const renderedComponent = shallow(
      <HomePage
        repos={repos}
        error={false}
        currentUser={currentUser}
      />
    );

    expect(renderedComponent.contains(<List currentUser={currentUser} items={repos} component={RepoListItem} />)).toEqual(true);
  });

  describe('mapDispatchToProps', () => {
    describe('onChangeUsername', () => {
      it('should be injected', () => {
        const dispatch = expect.createSpy();
        const result = mapDispatchToProps(dispatch);
        expect(result.onChangeUsername).toExist();
      });

      it('should dispatch changeUsername when called', () => {
        const dispatch = expect.createSpy();
        const result = mapDispatchToProps(dispatch);
        const username = 'lukemarsh';
        result.onChangeUsername({ target: { value: username } });
        expect(dispatch).toHaveBeenCalledWith(changeUsername(username));
      });
    });
  });

  describe('onSubmitForm', () => {
    it('should be injected', () => {
      const dispatch = expect.createSpy();
      const result = mapDispatchToProps(dispatch);
      expect(result.onSubmitForm).toExist();
    });

    it('should dispatch loadRepos when called', () => {
      const dispatch = expect.createSpy();
      const result = mapDispatchToProps(dispatch);
      result.onSubmitForm();
      expect(dispatch).toHaveBeenCalledWith(loadRepos());
    });

    it('should preventDefault if called with event', () => {
      const preventDefault = expect.createSpy();
      const result = mapDispatchToProps(() => {});
      const evt = { preventDefault };
      result.onSubmitForm(evt);
      expect(preventDefault).toHaveBeenCalledWith();
    });
  });
});
