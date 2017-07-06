
 var tempData = [{name:'HTML',y:80,color:'#00ff00'},{name:'',y:20,color:'#ddd'}]


// Create the chart
Highcharts.chart('container', {
    chart: {
        type: 'pie'
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
    series: [{
        name: 'Total',
        size: '60%',
            color: '#ffffff',
            distance: -30
        
    }, {
        name: 'Value',
        data: tempData,
        size: '80%',
        innerSize: '92%',
        dataLabels:{
        	enabled:false
        }
    }],
    responsive: {
        rules: [{
            condition: {
                maxWidth: 400
            },
            chartOptions: {
                series: [{
                    id: 'versions',
                    dataLabels: {
                        enabled: false
                    }
                }]
            }
        }]
    }
});