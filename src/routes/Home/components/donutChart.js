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
            center: ['50%', '50%'],
            colors:['#a5223f']
        },
        series:{
          states:{
            hover:{
              enabled:false
            }
          }
        }
    },
    tooltip: {
        valueSuffix: '%',
        enabled:false
    },
    title:{
      text:'',
      floating:true,
      verticalAlign:'middle',
      style:{
        fontSize:'12px'
      }
    },
    series: [{
        name: 'Total',
        size: '60%',
        distance: -30,
        dataLabels:{
          enabled:false
        }
        
    }, {
        name: 'Value',
        size: '80%',
        innerSize: '92%',
        dataLabels:{
          enabled:false
        },
        color:'#a5223f'
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
    this.chart.setTitle({text:this.props.data[0].y+'%'})

  }
  componentWillReceiveProps(next){
    console.log(next)
    this.chart.series[1].setData(next.data)
    this.chart.setTitle({text:next.data[0].y})
  }
  render() {
      return React.createElement('div', {
        id: this.props.container,
        style:{"width":"85%"}
      });
    }
  }

