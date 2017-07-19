import React from 'react'
import IdeasImg from '../assets/ideas.png'
import DesignImg from '../assets/design.png'
import CodeImg from '../assets/code.png'

export default class WhatIDo extends React.Component{
	render(){
		return(
			<div className="container-fluid whatIDoSection" >
				<p className="sectionTitle">Here's what I can do</p>
				<div className="">
					<div className="row">
						<div className="col-md-4 col-sm-4">
							<div className="imgDiv" style={{"height":"130px","width":"80px"}}>
								<img src={IdeasImg} width="100%" />
							</div>
							<p>I can collaborate with the stakeholders and customers to help transform an idea into picture</p>
						</div>
						<div className="col-md-4 col-sm-4">
							<div className="imgDiv" style={{"width":"130px"}}>
								<img src={DesignImg} width="100%" />
							</div>
							<p>I can help turn your idea into sketches or design. This is where the visualisation starts</p>
						</div>
						<div className="col-md-4 col-sm-4">
							<div className="imgDiv">
								<img src={CodeImg} width="100%" />
							</div>
							<p>I develop web/mobile applications using HTML, CSS and JS or using frameworks like React,Angular. After all, this is where the magic happens</p>
						</div>
					</div>
				</div>
			</div>
		)
	}
}