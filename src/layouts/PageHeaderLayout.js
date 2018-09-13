/*
 * File: PageHeaderLayout.js
 * Project: reedsun-homepage
 * File Created: Friday, 14th September 2018 1:49:10 pm
 * Author: ReedSun (sunhongzhao@foxmail.com)
 * -----
 * Last Modified: Thursday, 13th September 2018 8:03:48 pm
 * Modified By: ReedSun (sunhongzhao@foxmail.com>)
 * -----
 * Copyright 2018 - 2018, Shanjing
 */
import React, { PureComponent } from 'react';
import { connect } from 'dva';
import PropTypes from 'prop-types';
import styles from './PageHeaderLayout.less';

@connect(({ trophies }) => ({
  headerUrl: trophies.pageConfig.header_url || '',
}))
export default class PageHeaderLayout extends PureComponent {
  static propTypes = {
    headerUrl: PropTypes.string.isRequired,
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'trophies/getPageConfig',
    });
  }

  render() {
    const { children, headerUrl } = this.props;

    return (
      <div>
        <div className={styles.pageHeader} style={{ backgroundImage: `url(${headerUrl})` }} />
        <div className={styles.content}>{children}</div>
      </div>
    );
  }
}
