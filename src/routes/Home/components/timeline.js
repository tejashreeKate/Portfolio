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
					<div className="event">
						<div className="eventCircle">
							<i className="fa fa-briefcase"></i>
						</div>
						<div className="eventCard expCard">
							<span className="title">Siemens</span><br/>
							<span><b>Software Developer</b></span>
							<br/><span>(Feb 2018 - Current)</span>
						</div>
					</div>
					<div className="event">
						<div className="eventCircle">
							<i className="fa fa-briefcase"></i>
						</div>
						<div className="eventCard expCard">
							<span className="title">Siemens</span><br/>
							<span><b>Web and Mobile tool development intern</b></span>
							<br/><span>(May 2017 - Current)</span>
							<ul>
								<li>Responsible for design and front end development of the web application that deals with IT task processing and management
									using React JS with Asp.net and kendoUI.</li>
								<li>Improve the interfaces of some existing tools</li>
								<li>Design and implement platform interfaces for mobile devices</li>
							</ul>
						</div>
					</div>
					<div className="event">
						<div className="eventCard">
							<span className="title">New Jersey Institute of Technology</span><br/>
							<span><b>Master of Science (M.S.) in Information Systems</b></span>
							<br/><span>(Aug 2016 - Dec 2017)</span>
							<p>Courses: Data Structures &amp; Algorithms, Enterprise database management, User experience design, Customer Discovery, Data
						analytics for Information Systems, Web Mining, Business Process Innovation, System analysis and design</p>
						</div>
						<div className="eventCircle">
							<i className="fa fa-graduation-cap"></i>
						</div>
					</div>
					<div className="event">
						<div className="eventCircle">
							<i className="fa fa-briefcase"></i>
						</div>
						<div className="eventCard expCard">
							<span className="title">New Jersey Institute of Technology</span><br/>
							<span><b>Research Assistant</b></span>
							<br/><span>(Nov 2016 - May 2017)</span>
							<ul>
								<li>UI/UX development of the social networking application, which has a reputation system at its core using React, Redux,PubNub and RethinkDB</li>
								<li>Design and development of an interactive and visually appealing web application for a user-based survey.</li>
							</ul>
						</div>
					</div>
					<div className="event">
						<div className="eventCircle">
							<i className="fa fa-briefcase"></i>
						</div>
						<div className="eventCard expCard">
							<span className="title">Tata Consultancy Services</span><br/>
							<span><b>Web Developer</b></span>
							<br/><span>(Jan 2015 - Sep 2015)</span>
							<ul>
								<li>Responsible for front-end development of the web and mobile applications using Angular JS</li>
								<li>Work with Agile methodology to plan and implement the project requirements</li>
								<li>Involved in direct client interaction for project requirements and planning</li>
							</ul>
						</div>
					</div>
					<div className="event">
						<div className="eventCard">
							<span className="title">Yeshwantrao Chavan College of Engineering, India</span><br/>
							<span><b>Bachelor of Engineering (B.E.) of Electronics & Telecommunication</b></span>
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