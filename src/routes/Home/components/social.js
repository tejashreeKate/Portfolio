import React from 'react'

export default class Social extends React.Component{
	render(){
		return(
			<div className="container-fluid timelineSection" id="social">
				<p className="sectionTitle">Let's get social</p>
				<div className="row">
					<div className="col-md-4 col-sm-4">
						<div>
							<i className="fa fa-3x fa-envelope"></i>
						</div>
						<p>teju.kate@gmail[.]com<br/>tpk22@njit[.]edu</p>
					</div>
					<div className="col-md-4 col-sm-4">
						<div>
							<a href="https://github.com/tejashreeKate"><i className="fa fa-4x fa-github-square"></i></a>
						</div>
					</div>
					<div className="col-md-4 col-sm-4">
						<div>
							<a href="https://www.linkedin.com/in/tejashree-kate-4a166130/"><i className="fa fa-4x fa-linkedin-square"></i></a>
						</div>
					</div>
				</div>
			</div>
		)
	}
}