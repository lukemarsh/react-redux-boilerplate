/*
 *
 * LanguageToggle
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { selectLocale } from '../LanguageProvider/selectors';
import { changeLocale } from '../LanguageProvider/actions';
import { createSelector } from 'reselect';
import styles from './styles.css';
import Toggle from 'components/Toggle';

export class LocaleToggle extends React.Component { // eslint-disable-line
  render() {
    return (
      <div className={styles.localeToggle}>
        
      </div>
    );
  }
}

LocaleToggle.propTypes = {
  onLocaleToggle: React.PropTypes.func,
};

const mapStateToProps = createSelector(
  selectLocale(),
  (locale) => ({ locale })
);

export function mapDispatchToProps(dispatch) {
  return {
    onLocaleToggle: (evt) => dispatch(changeLocale(evt.target.value)),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LocaleToggle);
