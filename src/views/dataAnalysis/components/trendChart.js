import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Line } from '@ant-design/plots';


const TrendChart = () => {
  
  const data=[
    {
      year:2018,
      value:1.2,
      category: '产品线A'
    },
    {
      year:2019,
      value:1.1,
      category: '产品线A'
    },
    {
      year:2018,
      value:1.1,
      category: '产品线B'
    },
    {
      year:2019,
      value:1.0,
      category: '产品线B'
    },
    {
      year:2020,
      value: 2,
      category: '产品线A'
    },
    {
      year:2020,
      value:1.9,
      category: '产品线B'
    },
    {
      year:2021,
      value:5,
      category: '产品线A'
    },
    {
      year:2021,
      value:4.8,
      category: '产品线B'
    },
    {
      year:2022,
      value:1.0,
      category: '产品线A'
    },
    {
      year:2022,
      value:1.5,
      category: '产品线B'
    },
  ]
  const config = {
    data: data.reverse(),
    xField: 'year',
    yField: 'value',
    seriesField: 'category',
    yAxis: {
      label: {
        // 数值格式化为千分位
        formatter: (v) => `${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => `${s},`),
      },
    },
  
  };

  return <Line {...config} />;
};

export default TrendChart;
