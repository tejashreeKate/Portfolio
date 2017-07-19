import React from 'react'
import DonutChart from './donutChart.js'
export default class Skills extends React.Component{
	constructor(props) {
    	super(props);
        this.state = {
        	html:[{name:'HTML',y:90,color:'#FF5252'},{name:'',y:10,color:'#ddd'}],
        	js:[{name:'JS',y:80,color:'#250793'},{name:'',y:20,color:'#ddd'}],
        	design:[{name:'Design',y:70,color:'#FF5252'},{name:'',y:30,color:'#ddd'}],
        	prog:[{name:'prog',y:80,color:'#FF5252'},{name:'',y:20,color:'#ddd'}],
        	da:[{name:'da',y:60,color:'#250793'},{name:'',y:40,color:'#ddd'}],
        	angular:[{name:'angular',y:85,color:'#FF5252'},{name:'',y:15,color:'#ddd'}],
        	react:[{name:'react',y:85,color:'#250793'},{name:'',y:15,color:'#ddd'}],
        	sql:[{name:'sql',y:70,color:'#250793'},{name:'',y:30,color:'#ddd'}],
        	agile:[{name:'agile',y:70,color:'#FF5252'},{name:'',y:30,color:'#ddd'}]

        }

    }
	render(){
		return(
			<div className="container-fluid skillsSection">
				<p className="sectionTitle">Skills</p>
				<div className="chartDiv">
					<div className="row">
						<div className="col-md-1 col-sm-1"></div>
						<div className="col-md-2 col-sm-2">
							<DonutChart container='chart' data={this.state.html}/>
							<p>HTML/CSS</p>
						</div>
						<div className="col-md-2 col-sm-2">
							<DonutChart container='chart1' data={this.state.js}/>
							<p>Javascript</p>
						</div>
						<div className="col-md-2 col-sm-2">
							<DonutChart container='chart2' data={this.state.angular}/>
							<p>Angular JS</p>
						</div>
						<div className="col-md-2 col-sm-2">
							<DonutChart container='chart6' data={this.state.react}/>
							<p>React</p>
						</div>
						<div className="col-md-2 col-sm-2">
							<DonutChart container='chart3' data={this.state.prog}/>
							<p>Programming<br/><span className="subTitle">[Java, Asp.Net, Node JS, C]</span></p>
						</div>
						<div className="col-md-1 col-sm-1"></div>
					</div>
					<div className="row">
						<div className="col-md-1 col-sm-1"></div>
						<div className="col-md-2 col-sm-2">
							<DonutChart container='chart7' data={this.state.sql}/>
							<p>SQL</p>
						</div>
						<div className="col-md-2 col-sm-2">
							<DonutChart container='chart5' data={this.state.design}/>
							<p>Design<br/><span className="subTitle">[Axure, Photoshop, Invision]</span></p>
						</div>
						<div className="col-md-2 col-sm-2">
							<DonutChart container='chart4' data={this.state.da}/>
							<p>Data Analytics<br/><span className="subTitle">[Tableau, R, Rapid Miner, SAP Net Weaver]</span></p>
						</div>
						<div className="col-md-2 col-sm-2">
							<DonutChart container='chart8' data={this.state.agile}/>
							<p>Agile Methodology</p>
						</div>
						<div className="col-md-2 col-sm-2">
						</div>
						<div className="col-md-1 col-sm-1"></div>
					</div>
				</div>
			</div>
		)
	}
}