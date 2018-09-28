/*
 * File: leancloud.js
 * Project: reedsun-homepage
 * File Created: Friday, 28th September 2018 7:55:36 pm
 * Author: ReedSun (sunhongzhao@foxmail.com)
 * -----
 * Last Modified: Friday, 28th September 2018 8:30:34 pm
 * Modified By: ReedSun (sunhongzhao@foxmail.com>)
 * -----
 * Copyright 2018 - 2018, Shanjing
 */
import AV from 'leancloud-storage';
import { leancloudKey } from './key';

AV.init({
  appId: leancloudKey.appId,
  appKey: leancloudKey.appKey,
});

export default AV;
