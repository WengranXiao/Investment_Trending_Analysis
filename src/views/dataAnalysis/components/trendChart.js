import React, { Component } from 'react';
import { Chart } from '@antv/g2';


class TrendChart extends Component {
  componentDidMount() {
    var chart = new Chart({
      container: document.getElementById('TrendChart'),
      animate: false,
      height: 400,
      theme: 'classic',
    });
    chart
      .interval()
      .data([
        { genre: 'Sports', sold: 275 },
        { genre: 'Strategy', sold: 115 },
        { genre: 'Action', sold: 120 },
        { genre: 'Shooter', sold: 350 },
        { genre: 'Other', sold: 150 },
      ])
      .encode('x', 'genre')
      .encode('y', 'sold')
      .encode('color', 'genre');

    chart.render();
  }
  render() {
    return (
      <div id="TrendChart" />
    );
  }
}

export default TrendChart;
