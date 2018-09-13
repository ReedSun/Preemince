/*
 * File: trophies.js
 * Project: reedsun-homepage
 * File Created: Thursday, 13th September 2018 7:46:46 pm
 * Author: ReedSun (sunhongzhao@foxmail.com)
 * -----
 * Last Modified: Thursday, 13th September 2018 7:47:52 pm
 * Modified By: ReedSun (sunhongzhao@foxmail.com>)
 * -----
 * Copyright 2018 - 2018, Shanjing
 */
import request from '@/utils/request';

export async function getTrophiesPageConfig() {
  return request('/trophies/page_config');
}
