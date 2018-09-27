/*
 * File: index.js
 * Project: reedsun-homepage
 * File Created: Sunday, 9th September 2018 7:40:34 pm
 * Author: ReedSun (sunhongzhao@foxmail.com)
 * -----
 * Last Modified: Thursday, 27th September 2018 10:36:52 pm
 * Modified By: ReedSun (sunhongzhao@foxmail.com>)
 * -----
 * Copyright 2018 - 2018, Shanjing
 */
import React from 'react';
import classNames from 'classnames';
import Link from 'umi/link';
import TrainWord from '@/components/TrainWord';
import styles from './index.less';

function BasicLayout(props) {
  const { children } = props;
  return (
    <div>
      <div className={styles.header}>
        <div className={styles.logo}>
          <TrainWord>ReedSun</TrainWord>
        </div>
        <div className={styles.menu}>
          <Link
            className={classNames(styles.menuItem, {
              [styles.actionMenuItem]: location.pathname === '/',
            })}
            to="/"
          >
            首页
          </Link>
          <Link
            className={classNames(styles.menuItem, {
              [styles.actionMenuItem]: location.pathname.slice(0, 9) === '/trophies',
            })}
            to="/trophies"
          >
            成就
          </Link>
          <Link
            className={classNames(styles.menuItem, {
              [styles.actionMenuItem]: location.pathname.slice(0, 14) === '/shopping-list',
            })}
            to="/shopping-list"
          >
            购物清单
          </Link>
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
}

export default BasicLayout;
