/*
 * File: trophies.js
 * Project: reedsun-homepage
 * File Created: Friday, 14th September 2018 2:19:32 pm
 * Author: ReedSun (sunhongzhao@foxmail.com)
 * -----
 * Last Modified: Thursday, 13th September 2018 7:59:15 pm
 * Modified By: ReedSun (sunhongzhao@foxmail.com>)
 * -----
 * Copyright 2018 - 2018, Shanjing
 */
import { getTrophiesPageConfig } from '@/services/trophies';

export default {
  namespace: 'trophies',

  state: {
    pageConfig: {},
  },

  effects: {
    *getPageConfig(_, { call, put }) {
      const response = yield call(getTrophiesPageConfig);
      if (response.isRight) {
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
