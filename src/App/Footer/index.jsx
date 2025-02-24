import React from 'react';

import styles from './Footer.module.scss';

function Footer(props) {
    const { version } = props;
    return (
	<footer className={styles.container}>
          <h1 className={styles.row}>
	    <span className={styles.page_title}>Pretenders Calculator for Dominions 6</span>
	  </h1>

	  <p className={styles.row}>
	    <span className={styles.caption}>Version: </span>
	    <span className={styles.value}>{version}</span>
	  </p>

    <p className={styles.row}>
	    <span className={styles.caption}>Source code: </span>
	    <a href="https://github.com/zollqir/pretenders-dom6" className={styles.value}>https://github.com/zollqir/pretenders-dom6</a>
	  </p>
    <p className={styles.row}>
      <span className={styles.caption}>Based on the Dominions 5 Pretender Calculator by: </span>
      <a href="https://github.com/bsielski" className={styles.value}>bsielski</a>
    </p>

          <p className={styles.row}>
	    If you notice incorrect behaviour, please create <a href="https://github.com/zollqir/pretenders-dom6" className={styles.value}>a new issue</a> about it or mail me at <i>zollqir@gmail.com</i>.
	  </p>
	</footer>
    );
}

export default Footer;
