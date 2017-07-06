import React from 'react'
import DonutChart from './donutChart.js'
export default class Skills extends React.Component{
	constructor(props) {
    	super(props);
        this.state = {
        	html:[{name:'HTML',y:90,color:'#a5223f'},{name:'',y:10,color:'#ddd'}],
        	js:[{name:'JS',y:80,color:'#250793'},{name:'',y:20,color:'#ddd'}],
        	design:[{name:'JS',y:70,color:'#a5223f'},{name:'',y:30,color:'#ddd'}],
        	prog:[{name:'JS',y:80,color:'#250793'},{name:'',y:20,color:'#ddd'}],
        	da:[{name:'JS',y:60,color:'#a5223f'},{name:'',y:40,color:'#ddd'}]
        }

    }
	render(){
		return(
			<div className="container-fluid skillsSection">
				<p className="sectionTitle">Skills</p>
				<div className="chartDiv">
					<p className="skillsText">Hi, I'm Tejashree with a professional experinece of around 4 years. I have successfully delivered
					multiple projects from web to mobile applications, seving diffrent roles and responsibilites for my organization. 
					I have a diverse skill set from design to development. I also got a chance to extend my knowledge to Data Analytics through my 
					learnings from Masters program. You can expect hard work, sincerity, dedication, good learner from me and ofcourse a wow factor in my work.
					 If your are looking to hire, you can get my contact details here.
					</p>
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