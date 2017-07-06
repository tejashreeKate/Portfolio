import React from 'react'
import WhatIDo from './whatIDo.js'
import Skills from './skills.js'
import './HomeView.scss'

export default class HomeView extends React.Component{
	render(){
		return(
			<div>
				<div>
					<ul className="nav justify-content-end navBarTop">
					  <li className="nav-item">
					    <a className="nav-link active" href="#">Home</a>
					  </li>
					  <li className="nav-item">
					    <a className="nav-link" href="#">About Me</a>
					  </li>
					  <li className="nav-item">
					    <a className="nav-link" href="#">Projects</a>
					  </li>
					  <li className="nav-item">
					    <a className="nav-link" href="#">Contact</a>
					  </li>
					</ul>
				</div>
				<div className="homeContainer">
					<div className="homeText">
						<p><b>Hey, I m Tejashree<br/>
						<span>Web Developer</span></b></p>
					</div>
				</div>
				<WhatIDo />
				<Skills />
			</div>

		)
	}
}

