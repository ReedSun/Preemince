/*
 * File: index.js
 * Project: reedsun-homepage
 * File Created: Sunday, 9th September 2018 7:40:34 pm
 * Author: ReedSun (sunhongzhao@foxmail.com)
 * -----
 * Last Modified: Tuesday, 11th September 2018 2:06:25 pm
 * Modified By: ReedSun (sunhongzhao@foxmail.com>)
 * -----
 * Copyright 2018 - 2018, Shanjing
 */
import React from 'react';
import styles from './index.less';

export default function() {
  return (
    <div>
      <div className={styles.fullPage}>
        <h1>ReedSun</h1>
      </div>
      <div className={styles.fullPage}>
        <h1>Maybe a programmer</h1>
        <p>
          <span>GitHub</span>
        </p>
      </div>
      <div className={styles.fullPage}>
        <h1>Maybe a game player</h1>
        <p>
          <span>PlayStation</span>
          <span>Steam</span>
          <span>other</span>
        </p>
      </div>
      <div className={styles.fullPage}>
        <h1>Maybe just an ordinary person</h1>
        <p>To be added</p>
      </div>
    </div>
  );
}
