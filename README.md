# react-chart.js

[![Greenkeeper badge](https://badges.greenkeeper.io/axetroy/react-chart.js.svg)](https://greenkeeper.io/)

[chart.js](https://github.com/chartjs/Chart.js) wrapper component for react

## Install

```bash
yarn add lodash.debounce        # requirement
yarn add lodash.isequal         # requirement
yarn add chart.js               # requirement
yarn add @axetroy/react-chart.js
```

## Usage

```jsx harmony
import React, { Component } from 'react';
import ReactChart from '@axetroy/react-chart';

class App extends Component {
  render() {
    return (
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
          </div>
    );
  }
}
```

## Props

- type: string

- data: object

- options: object
    
## Run the Demo

```bash
git clone https://github.com/axetroy/react-chart.js.git
yarn
yarn start
```

### License

The [MIT License](https://github.com/axetroy/react-chart.js/blob/master/LICENSE)