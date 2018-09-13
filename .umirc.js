/*
 * File: .umirc.js
 * Project: reedsun-homepage
 * File Created: Sunday, 9th September 2018 7:40:34 pm
 * Author: ReedSun (sunhongzhao@foxmail.com)
 * -----
 * Last Modified: Friday, 14th September 2018 2:17:18 pm
 * Modified By: ReedSun (sunhongzhao@foxmail.com>)
 * -----
 * Copyright 2018 - 2018, Shanjing
 */
// ref: https://umijs.org/config/
const path = require('path');

export default {
  alias: {
    '@': path.resolve(__dirname, 'src/'),
  },
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    [
      'umi-plugin-react',
      {
        antd: true,
        dva: {
          immer: true,
        },
        dynamicImport: true,
        title: 'ReedSun',
        dll: true,
        pwa: true,
        routes: {
          exclude: [],
        },
        hardSource: true,
      },
    ],
  ],
};
