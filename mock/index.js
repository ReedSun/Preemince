/*
 * File: index.js
 * Project: reedsun-homepage
 * File Created: Thursday, 13th September 2018 7:57:27 pm
 * Author: ReedSun (sunhongzhao@foxmail.com)
 * -----
 * Last Modified: Thursday, 13th September 2018 8:00:00 pm
 * Modified By: ReedSun (sunhongzhao@foxmail.com>)
 * -----
 * Copyright 2018 - 2018, Shanjing
 */
import { delay } from 'roadhog-api-doc';

const proxy = {
  'GET /trophies/page_config': {
    header_url: 'http://wx1.sinaimg.cn/large/43823ba4gw1f6oofvcey7j21hc0u0tn2.jpg',
  },
};

export default delay(proxy, 1000);
