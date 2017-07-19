import React from 'react'
import WhatIDo from './whatIDo.js'
import Skills from './skills.js'
import Timeline from './timeline.js'
import Work from './work.js'
import Social from './social.js'
import Paintings from './paintings.js'
import Resume from './resume.js'
import AboutMe from './aboutMe.js'
import './HomeView.scss'

export default class HomeView extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			showPage:''
		}
	}
	scroll(id){
		let elem = document.getElementById(id)
		//elem.scrollIntoView({behaviour:"smooth"})
		$('html, body').animate({
        	scrollTop: $('#'+id).offset().top
    	}, 500);
    	this.setState({showPage:''})
	}
	showPage(val){
		this.setState({showPage:val})
	}
	render(){
		console.log(this.state)
		return(
			<div>
				<div>
					<ul className="nav justify-content-end navBarTop">
					  <li className="nav-item" onClick={this.scroll.bind(this,'home')}>
					    Home
					  </li>
					  <li className="nav-item" onClick={this.scroll.bind(this,'whatIDo')}>
					    About Me
					  </li>
					  <li className="nav-item" onClick={this.scroll.bind(this,'work')}>
					    Projects
					  </li>
					  <li className="nav-item" onClick={this.scroll.bind(this,'social')}>
					    Contact
					  </li>
					</ul>
				</div>
				<div className={this.state.showPage==''?'show':'hide'}>
					<div className="homeContainer" id="home">
						<div className="homeText">
							<p><b>Hey, I m Tejashree<br/>
							<span>Web Developer</span></b></p>
						</div>
					</div>
					<WhatIDo />
					<AboutMe />
					<Skills />
					<Timeline />
					<Work showPage={this.showPage.bind(this)}/>
					<Social />
				</div>
				<Paintings show={this.state.showPage=='paintings'?true:false}/>
				<Resume show={this.state.showPage=='resume'?true:false}/>
				<a href="javascript:" id="return-to-top"><i className="fa fa-chevron-up"></i></a>
			</div>

		)
	}
}
$(document).ready(function(){
	$(window).scroll(function() {
	    if ($(this).scrollTop() >= 200) {        // If page is scrolled more than 50px
	        $('#return-to-top').fadeIn(200);    // Fade in the arrow
	    } else {
	        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
	    }
	});
	$('#return-to-top').click(function() {      // When arrow is clicked
	    $('body,html').animate({
	        scrollTop : 0                       // Scroll to top of body
	    }, 500);
	});
})
