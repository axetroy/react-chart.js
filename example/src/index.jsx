import React from 'react';
import { render } from 'react-dom';
import ReactChart from '../../lib/react-chart';

const element = document.createElement('div');
document.body.appendChild(element);
render(
  <div>
    hello world
    <ReactChart
      type="radar"
      data={{
        labels: ['Javascript', 'Java', 'Go', 'Python'],
        datasets: [
          {
            backgroundColor: 'rgba(179,181,198,0.2)',
            borderColor: 'rgba(179,181,198,1)',
            pointBackgroundColor: 'rgba(179,181,198,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(179,181,198,1)',
            data: [0.7, 0.5, 0.2, 0.1]
          }
        ]
      }}
      options={{
        animation: false,
        title: {
          display: true,
          text: '使用语言频次'
        },
        legend: {
          display: false
        }
      }}
    />
  </div>,
  element
);
