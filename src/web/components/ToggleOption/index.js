/**
*
* ToggleOption
*
*/

import React from 'react';

const ToggleOption = ({ value, message }) => (
  <option value={value}>
    {message}
  </option>
);

ToggleOption.propTypes = {
  value: React.PropTypes.string.isRequired,
  message: React.PropTypes.object.isRequired,
};

export default ToggleOption;
