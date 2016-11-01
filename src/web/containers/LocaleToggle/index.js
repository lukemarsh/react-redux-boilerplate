/*
 *
 * LanguageToggle
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { selectLocale } from '../LanguageProvider/selectors';
import { changeLocale } from '../LanguageProvider/actions';
import { appLocales } from '../../i18n';
import { createSelector } from 'reselect';
import styles from './styles.css';
import messages from './messages';
import Toggle from 'components/Toggle';

const LocaleToggle = (props) => {
  const { onLocaleToggle } = props;
  return (
    <div className={styles.localeToggle}>
      <Toggle values={appLocales} messages={messages} onToggle={onLocaleToggle} />
    </div>
  );
};

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
