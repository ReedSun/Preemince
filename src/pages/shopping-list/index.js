/*
 * File: index.js
 * Project: reedsun-homepage
 * File Created: Thursday, 27th September 2018 10:34:53 pm
 * Author: ReedSun (sunhongzhao@foxmail.com)
 * -----
 * Last Modified: Friday, 28th September 2018 8:28:15 pm
 * Modified By: ReedSun (sunhongzhao@foxmail.com>)
 * -----
 * Copyright 2018 - 2018, Shanjing
 */
import React, { PureComponent } from 'react';
import { Table } from 'antd';
import AV from '@/utils/leancloud';

export default class ShoppingList extends PureComponent {
  state = {
    data: [],
  };

  componentDidMount() {
    const query = new AV.Query('shopping_list');
    query.notEqualTo('status', '1');
    query.find().then(data => {
      this.setState({ data });
    });
  }

  render() {
    const { data } = this.state;

    const dataSource = (() => {
      const result = [];
      if (data.length > 0) {
        for (const i of data) {
          const { dream, ...attributes } = i.attributes;
          for (const j of dream) {
            result.push({
              ...j,
              ...attributes,
              key: j.bread + j.model,
            });
          }
        }
      }
      return result;
    })();

    console.log(dataSource);

    const columns = [
      {
        title: '名称',
        dataIndex: 'name',
      },
      {
        title: '用途',
        dataIndex: 'type',
      },
      {
        title: '心仪产品',
        children: [
          {
            title: '品牌',
            dataIndex: 'bread',
          },
          {
            title: '型号',
            dataIndex: 'model',
          },
          {
            title: '官方价格',
            dataIndex: 'official.price',
          },
          {
            title: '官方购买地址',
            dataIndex: 'official',
            render: val => <a href={val.link}>{val.name}</a>,
          },
          {
            title: '心理价位',
            dataIndex: 'psychological.price',
          },
          {
            title: '关注地址',
            dataIndex: 'psychological.follow',
            render: () => '@TODO',
          },
        ],
      },
      {
        title: '操作',
        key: 'action',
        render: () => '@TODO',
      },
    ];

    return (
      <div style={{ padding: 16 }}>
        <h1>购物清单</h1>
        <Table dataSource={dataSource} columns={columns} />
      </div>
    );
  }
}
