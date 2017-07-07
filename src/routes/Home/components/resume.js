import React from 'react'
import Skills from '../assets/portfolio/skills.png'
import Skills1 from '../assets/portfolio/skills_new.png'
import HomePage from '../assets/portfolio/homePag.png'

export default class Resume extends React.Component{
	render(){
		return(
			<div className="container-fluid paintingSection">
				<p className="sectionTitle">My Online Portfolio</p>
				<p style={{"textAlign":"justify"}}>Online portfolio is something where you get a chance to introduce yourself. I always wanted my website to be simple and catchy.
				So I first tried sketching down my thoughts. Then I converted it into design using Photoshop. It gave me a base to start with the development.
				This website is developed using HTML, CSS and React and deployed on github pages.
				Also I had my old version of online portfolio: <a href="https://tejashreekate.github.io/resume">https://tejashreekate.github.io/resume</a>. 
				Here are some of the versions of the mockups I tried to design for my website
				</p>
				<div className="row paintImg">
					<div className="col-md-6 col-sm-6">
						<img src={HomePage} />
					</div>
					<div className="col-md-6 col-sm-6">
						<img src={Skills} />
					</div>
				</div>
				<div className="row paintImg">
					<div className="col-md-6 col-sm-6">
						<img src={Skills1} />
					</div>
				</div>
			</div>
		)
	}
}