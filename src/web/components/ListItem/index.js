import React from 'react';

import styles from './styles.css';

const ListItem = (props) => (
  <li className={props.className || styles.item}>
    <div className={styles.itemContent}>
      {props.item}
    </div>
  </li>
);

ListItem.propTypes = {
  className: React.PropTypes.string,
  item: React.PropTypes.any,
};

export default ListItem;
