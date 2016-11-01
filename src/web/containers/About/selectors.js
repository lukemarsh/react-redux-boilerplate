import { createSelector } from 'reselect';

/**
 * Direct selector to the about state domain
 */
const selectAboutDomain = () => (state) => state.get('about');

/**
 * Other specific selectors
 */


/**
 * Default selector used by About
 */

const selectAbout = () => createSelector(
  selectAboutDomain(),
  (substate) => substate.toJS()
);

export default selectAbout;
export {
  selectAboutDomain,
};
