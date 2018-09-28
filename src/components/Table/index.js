/*
 * File: index.js
 * Project: reedsun-homepage
 * File Created: Friday, 28th September 2018 8:46:27 pm
 * Author: ReedSun (sunhongzhao@foxmail.com)
 * -----
 * Last Modified: Friday, 28th September 2018 8:47:09 pm
 * Modified By: ReedSun (sunhongzhao@foxmail.com>)
 * -----
 * Copyright 2018 - 2018, Shanjing
 */
import React from 'react';
import { Table as AntdTable } from 'antd';
import styles from './index.less';

export default function Table({ ...props }) {
  return <AntdTable bordered {...props} className={styles.table} />;
}
