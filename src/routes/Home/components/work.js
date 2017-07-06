import React from 'react'

export default class Work extends React.Component{
	render(){
		return(
			<div className="container-fluid workSection" id="work">
				<p className="sectionTitle">Projects</p>
				<p className="subTitle">Academic Projects</p>
				<div className="row projectContainer">
					<div className="col-md-4 col-sm-4">
						<div className="projectDiv">iCourseFinder App Design</div>
					</div>
					<div className="col-md-4 col-sm-4">
						<div className="projectDiv">Data Visulaisation (Tableau)</div>
					</div>
					<div className="col-md-4 col-sm-4"></div>
				</div>
				<p className="subTitle">Personal Projects</p>
				<div className="row projectContainer">
					<div className="col-md-4 col-sm-4">
						<div className="projectDiv1">Online Portfolio</div>
					</div>
					<div className="col-md-4 col-sm-4">
						<div className="projectDiv1">Design Mockups</div>
					</div>
					<div className="col-md-4 col-sm-4">
						<div className="projectDiv1">Check out some of my paintings</div>
					</div>
				</div>
			</div>
		)
	}
}