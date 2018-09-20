/*
 * File: index.js
 * Project: reedsun-homepage
 * File Created: Friday, 20th September 2018 8:43:37 pm
 * Author: ReedSun (sunhongzhao@foxmail.com)
 * -----
 * Last Modified: Thursday, 20th September 2018 9:51:02 pm
 * Modified By: ReedSun (sunhongzhao@foxmail.com>)
 * -----
 * Copyright 2018 - 2018, Shanjing
 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './index.less';

export default class TarinWord extends PureComponent {
  static propTypes = {
    children: PropTypes.string.isRequired,
    height: PropTypes.number,
    fontSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    trainColor: PropTypes.string,
    wordColor: PropTypes.string,
  };

  static defaultProps = {
    fontSize: 30,
    height: 64,
    trainColor: 'indianred',
    wordColor: 'lightblue',
  };

  render() {
    const { children, fontSize, height, trainColor, wordColor } = this.props;

    const wrapperStyles = {
      fontSize,
      height,
    };

    const textStyles = {
      color: wordColor,
      lineHeight: `${height}px`,
    };

    const trainStyles = {
      color: trainColor,
      lineHeight: `${height}px`,
    };

    return (
      <div className={styles.wrapper} style={wrapperStyles}>
        <div className={styles.text} style={textStyles}>
          {children}
        </div>
        <div className={styles.trainWrapper} style={trainStyles}>
          <div className={styles.train}>{children}</div>
        </div>
      </div>
    );
  }
}
