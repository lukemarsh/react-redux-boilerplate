import React from 'react';

import styles from './styles.css';

const List = (props) => {
  const { component: ComponentToRender, currentUser } = props;
  let content = (<div></div>);

  // If we have items, render them
  if (props.items) {
    content = props.items.map((item, index) => (
      <ComponentToRender currentUser={currentUser} key={`item-${index}`} item={item} />
    ));
  } else {
    // Otherwise render a single component
    content = (<ComponentToRender />);
  }

  return (
    <div className={styles.listWrapper}>
      <ul className={styles.list}>
        {content}
      </ul>
    </div>
  );
};

List.propTypes = {
  component: React.PropTypes.func.isRequired,
  items: React.PropTypes.array,
  currentUser: React.PropTypes.string
};

export default List;
