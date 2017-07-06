import React from 'react'
import DonutChart from './donutChart.js'
export default class Skills extends React.Component{
	constructor(props) {
    	super(props);
        this.state = {
        	html:[{name:'HTML',y:90,color:'#00ff00'},{name:'',y:10,color:'#ddd'}],
        	js:[{name:'JS',y:80,color:'#00ff00'},{name:'',y:20,color:'#ddd'}],
        	design:[{name:'JS',y:70,color:'#00ff00'},{name:'',y:30,color:'#ddd'}],
        	prog:[{name:'JS',y:80,color:'#00ff00'},{name:'',y:20,color:'#ddd'}],
        	da:[{name:'JS',y:60,color:'#00ff00'},{name:'',y:40,color:'#ddd'}]
        }

    }
	render(){
		return(
			<div className="container-fluid skillsSection">
				<p className="sectionTitle" style={{"color":"#fff"}}>Skills</p>
				<div className="chartDiv">
					Content - description.
					<div className="row">
						<div className="col-md-1 col-sm-1"></div>
						<div className="col-md-2 col-sm-2">
							<DonutChart container='chart' data={this.state.html}/>
							<p>HTML/CSS</p>
						</div>
						<div className="col-md-2 col-sm-2">
							<DonutChart container='chart1' data={this.state.js}/>
							<p>JS</p>
						</div>
						<div className="col-md-2 col-sm-2">
							<DonutChart container='chart2' data={this.state.design}/>
							<p>Design</p>
						</div>
						<div className="col-md-2 col-sm-2">
							<DonutChart container='chart3' data={this.state.prog}/>
							<p>Programming</p>
						</div>
						<div className="col-md-2 col-sm-2">
							<DonutChart container='chart4' data={this.state.da}/>
							<p>Data Analytics Skills</p>
						</div>
						<div className="col-md-1 col-sm-1"></div>
					</div>
					
				</div>
			</div>
		)
	}
}