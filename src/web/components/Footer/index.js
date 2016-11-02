import React from 'react';
import messages from './messages';
import styles from './styles.css';

const Footer = () => (
  <footer className={styles.footer}>
    <section>
      <p>
        {messages.licenseMessage}
      </p>
    </section>
    <section>
      <p>
        {messages.authorMessage}
      </p>
    </section>
  </footer>
);

export default Footer;
