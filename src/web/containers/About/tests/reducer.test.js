import expect from 'expect';
import aboutReducer from '../reducer';
import { fromJS } from 'immutable';

describe('aboutReducer', () => {
  it('returns the initial state', () => {
    expect(aboutReducer(undefined, {})).toEqual(fromJS({}));
  });
});
