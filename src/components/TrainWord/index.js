/*
 * File: index.js
 * Project: reedsun-homepage
 * File Created: Friday, 20th September 2018 8:43:37 pm
 * Author: ReedSun (sunhongzhao@foxmail.com)
 * -----
 * Last Modified: Thursday, 20th September 2018 8:48:12 pm
 * Modified By: ReedSun (sunhongzhao@foxmail.com>)
 * -----
 * Copyright 2018 - 2018, Shanjing
 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class TarinWord extends PureComponent {
  static propTypes = {
    children: PropTypes.string.isRequired,
  };

  render() {
    const { children } = this.props;

    return <span>{children}</span>;
  }
}
