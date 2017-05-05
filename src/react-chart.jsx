import React, { Component } from 'react';
import debounce from 'lodash.debounce';
import isequal from 'lodash.isequal';

class Chart extends Component {
  componentWillUnmounted() {
    this.__chart__ && this.__chart__.destroy && this.__chart__.destroy();
  }

  shouldComponentUpdate(nextProps) {
    return !isequal(this.props, nextProps);
  }

  draw(ctx) {
    if (!ctx) return;

    const config = {
      type: this.props.type,
      data: { ...this.props.data },
      options: { ...this.props.options }
    };

    require.ensure('chart.js', require => {
      const ChartJs = require('chart.js');
      this.__chart__ = new ChartJs(ctx, config);
    });
  }

  render() {
    return (
      <canvas
        className={
          'react-chart.js' +
            (this.props.className ? ' ' + this.props.className : '')
        }
        width={this.props.width}
        height={this.props.height}
        {...this.props.style}
        ref={debounce(ctx => this.draw(ctx), 500)}
      />
    );
  }
}

export default Chart;
