import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Bar } from '@ant-design/plots';

const consistChart = () => {

  const data = [
    {
      year: '实际',
      value: 30.60,
      type: '产品线A',
    },

    {
      year: '预测',
      value: 25.5,
      type: '产品线A',
    },
    {
      year: '实际',
      value: 20.40,
      type: '产品线B',
    },
    {
      year: '预测',
      value: 15.5,
      type: '产品线B',
    },
    
  ];
  const config = {
    data: data,
    isStack: true,
    xField: 'value',
    yField: 'year',
    seriesField: 'type',
    label: {
      // 可手动配置 label 数据标签位置
      position: 'middle',
      // 'left', 'middle', 'right'
      // 可配置附加的布局方法
      layout: [
        // 柱形图数据标签位置自动调整
        {
          type: 'interval-adjust-position',
        }, // 数据标签防遮挡
        {
          type: 'interval-hide-overlap',
        }, // 数据标签文颜色自动调整
        {
          type: 'adjust-color',
        },
      ],
    },
  };
  return <Bar {...config} />;
};

export default consistChart
