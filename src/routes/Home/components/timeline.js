import React from 'react'

export default class Timeline extends React.Component{
	render(){
		return(
			<div className="container-fluid timelineSection" id="timeline">
				<div className="sectionTitle">My Timeline</div>
				<div className="eventTimeline">
					<div className="row">
						<div className="col-md-6 col-sm-6 subTitle">Education</div>
						<div className="col-md-6 col-sm-6 subTitle">Experience</div>
					</div><br/>
					<div className="event expCard">
						<div className="eventCircle">
							<i className="fa fa-briefcase"></i>
						</div>
						<div className="eventCard">
							<span className="title">Siemens</span><br/>
							<span>Web and Mobile tool development intern</span>
							<br/><span>(May 2017 - Current)</span>
						</div>
					</div>
					<div className="event eduCard">
						<div className="eventCard">
							<span className="title">New Jersey Institute of Technology</span><br/>
							<span>Master of Science (M.S.)</span>
							<br/><span>(Aug 2016 - Dec 2017)</span>
						</div>
						<div className="eventCircle">
							<i className="fa fa-graduation-cap"></i>
						</div>
					</div>
					<div className="event expCard">
						<div className="eventCircle">
							<i className="fa fa-briefcase"></i>
						</div>
						<div className="eventCard">
							<span className="title">New Jersey Institute of Technology</span><br/>
							<span>Research Assistant</span>
							<br/><span>(Nov 2016 - May 2017)</span>
						</div>
					</div>
					<div className="event expCard">
						<div className="eventCircle">
							<i className="fa fa-briefcase"></i>
						</div>
						<div className="eventCard">
							<span className="title">Tata Consultancy Services</span><br/>
							<span>Web Developer</span>
							<br/><span>(Jan 2015 - Sep 2015)</span>
						</div>
					</div>
					<div className="event eduCard">
						<div className="eventCard">
							<span className="title">Yeshwantrao Chavan College of Engineering, India</span><br/>
							<span>Bachelor of Engineering (B.E.)</span>
							<br/><span>(June 2008 - June 2012)</span>
						</div>
						<div className="eventCircle">
							<i className="fa fa-graduation-cap"></i>
						</div>
					</div>
					<p style={{"textAlign":"center"}}>...</p>
				</div>
			</div>
		)
	}
}