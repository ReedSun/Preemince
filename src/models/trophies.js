/*
 * File: trophies.js
 * Project: reedsun-homepage
 * File Created: Friday, 14th September 2018 2:19:32 pm
 * Author: ReedSun (sunhongzhao@foxmail.com)
 * -----
 * Last Modified: Thursday, 13th September 2018 8:16:14 pm
 * Modified By: ReedSun (sunhongzhao@foxmail.com>)
 * -----
 * Copyright 2018 - 2018, Shanjing
 */
import { getTrophiesPageConfig } from '@/services/trophies';

export default {
  namespace: 'trophies',

  state: {
    pageConfig: {
      header_url: localStorage.getItem('trophies_header_url'),
    },
  },

  effects: {
    *getPageConfig(_, { call, put }) {
      const response = yield call(getTrophiesPageConfig);
      if (response.isRight) {
        localStorage.setItem('trophies_header_url', response.body.header_url);
        yield put({
          type: 'changePageConfig',
          payload: response.body,
        });
      }
    },
  },

  reducers: {
    changePageConfig(state, { payload }) {
      return {
        ...state,
        pageConfig: payload,
      };
    },
  },
};
