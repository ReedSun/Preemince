/*
 * File: request.js
 * Project: wuye-shanjing
 * File Created: Monday, 19th March 2018 5:17:03 pm
 * Author: ant-design-pro
 * -----
 * Last Modified: Thursday, 13th September 2018 7:54:19 pm
 * Modified By: ReedSun (sunhongzhao@foxmail.com>)
 * -----
 * Copyright 2018 - 2018, Shanjing
 */
import fetch from 'dva/fetch';
import { notification } from 'antd';

// 接口域名
export const host = (() => {
  if (process && process.env.NODE_ENV === 'development') {
    return ''; // 开发环境
  } else {
    return ''; // 生产环境
  }
})();

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default function request(url, options) {
  const beforeUrl = window.location.pathname;
  const defaultOptions = {
    // 如果有默认的 Fetch 配置信息可以写在这里
    showErrorDialog: true,
    host,
    checkUrl: true,
  };
  const newOptions = { ...defaultOptions, ...options };
  if (
    newOptions.method === 'POST' ||
    newOptions.method === 'PUT' ||
    newOptions.method === 'PATCH'
  ) {
    newOptions.headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json; charset=utf-8',
      ...newOptions.headers,
    };
    newOptions.body = JSON.stringify(newOptions.body);
  }

  return fetch(newOptions.host + url, newOptions)
    .then(response => {
      switch (response.status) {
        case 204: {
          return {
            isRight: !(newOptions.checkUrl && window.location.pathname !== beforeUrl),
            code: 204,
            body: null,
          };
        }
        case 404: {
          const error = new Error(response.status);
          error.name = response.statusText;
          error.code = 404;
          throw error;
        }
        default: {
          return response.json().then(data => {
            if (response.status < 400) {
              return {
                isRight: !(newOptions.checkUrl && window.location.pathname !== beforeUrl),
                code: response.status,
                body: data,
              };
            }
            const error = new Error(response.status);
            error.code = response.status;
            error.body = data;
            error.name = data.message || response.statusText;
            throw error;
          });
        }
      }
    })
    .catch(e => {
      if (newOptions.showErrorDialog) {
        notification.error({
          message: '请求失败',
          description: e.name,
        });
      }
      return {
        isRight: false,
        code: e.code,
        body: e.body,
        desc: e.name,
      };
    });
}
