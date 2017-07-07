import React from 'react'

export default class Work extends React.Component{
	render(){
		return(
			<div className="container-fluid workSection" id="work">
				<p className="sectionTitle">Projects</p>
				<p className="subTitle">Academic Projects</p>
				<div className="row projectContainer">
					<div className="col-md-4 col-sm-4">
						<a href="https://web.njit.edu/~tpk22/iCourseAssist/frame.html"><div className="projectDiv">iCourseFinder App Design</div></a>
					</div>
					<div className="col-md-4 col-sm-4">
						<a href="https://public.tableau.com/views/FinalpptWithFeedback_0/Sheet1World?:embed=y&:display_count=yes"><div className="projectDiv">Data Visulaisation (Tableau)</div></a>
					</div>
					<div className="col-md-4 col-sm-4"></div>
				</div>
				<p className="subTitle">Personal Projects</p>
				<div className="row projectContainer">
					<div className="col-md-4 col-sm-4">
						<a href="/resume"><div className="projectDiv1">Online Portfolio</div></a>
					</div>
					<div className="col-md-4 col-sm-4">
						<a href="/paintings"><div className="projectDiv1">Check out some of my paintings</div></a>
					</div>
					<div className="col-md-4 col-sm-4">
{/*						<div className="projectDiv1">Design Mockups</div>
*/}					</div>
				</div>
			</div>
		)
	}
}