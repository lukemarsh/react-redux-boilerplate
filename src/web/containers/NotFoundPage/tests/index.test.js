/**
 * Testing the NotFoundPage
 */

import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

import { NotFound } from '../index';
import Button from 'components/Button';

describe('<NotFound />', () => {
  it('should render the Page Not Found text', () => {
    const renderedComponent = shallow(
      <NotFound />
    );
    expect(renderedComponent.contains(
      <h1>
        Page not found.
      </h1>)).toEqual(true);
  });

  it('should render a button', () => {
    const renderedComponent = shallow(
      <NotFound />
    );
    const renderedButton = renderedComponent.find(Button);
    expect(renderedButton.length).toEqual(1);
  });

  it('should link to "/"', (done) => {
    const dispatch = (action) => {
      expect(action.payload.args).toEqual('/');
      done();
    };

    const renderedComponent = shallow(
      <NotFound dispatch={dispatch} />
    );
    const button = renderedComponent.find(Button);
    button.prop('handleRoute')();
  });
});
