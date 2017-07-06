import React from 'react'

var options = {
    chart: {
        type: 'pie',
        backgroundColor:null,
        height:200
    },
    plotOptions: {
        pie: {
            shadow: false,
            center: ['50%', '50%']
        }
    },
    tooltip: {
        valueSuffix: '%'
    },
    title:{
      text:null
    },
    series: [{
        name: 'Total',
        size: '60%',
        color: '#ffffff',
        distance: -30
        
    }, {
        name: 'Value',
        size: '80%',
        innerSize: '92%',
        dataLabels:{
          enabled:false
        }
    }],
    credits:{
      enabled:false
    }
} 

export default class DonutChart extends React.Component {
	constructor(props) {
    	super(props);
        this.chart = undefined;
    }
  
  componentDidMount() {
      if (this.props.modules) {
        this.props.modules.forEach(function(module) {
          module(Highcharts);
        });
      }
      // Set container which the chart should render to.
      this.chart = new Highcharts[this.props.type || "Chart"](
        this.props.container,
        options
      );
    this.chart.series[1].setData(this.props.data)

  }
  componentWillReceiveProps(next){
    console.log(next)
    this.chart.series[1].setData(next.data)
  }
  render() {
      return React.createElement('div', {
        id: this.props.container,
        style:{"width":"100%"}
      });
    }
  }

