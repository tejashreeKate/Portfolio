import React from 'react'
import Paint1 from '../assets/paintings/paint1.jpg'
import Paint2 from '../assets/paintings/paint2.jpg'
import Paint3 from '../assets/paintings/paint3.jpg'
import Paint4 from '../assets/paintings/paint4.jpg'
import Paint5 from '../assets/paintings/paint5.jpg'

export default class Paintings extends React.Component{
	render(){
		return(
			<div className="container-fluid paintingSection">
				<div className="row">
					<div className="col-md-6 col-sm-6">
						<div className="paintImg">
							<img src={Paint1} width="100%"/>
						</div>
					</div>
					<div className="col-md-6 col-sm-6">
						<div className="paintImg">
							<img src={Paint5} width="100%"/>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-md-6 col-sm-6">
						<div className="paintImg">
							<img src={Paint2} width="100%"/>
						</div>
					</div>
					<div className="col-md-6 col-sm-6">
						<div className="paintImg">
							<img src={Paint4} width="100%"/>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-md-6 col-sm-6">
						<div className="paintImg">
							<img src={Paint3} width="100%"/>
						</div>
					</div>
					<div className="col-md-6 col-sm-6">
					</div>
				</div>
			</div>
		)
	}
}