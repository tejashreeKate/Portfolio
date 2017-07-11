import React from 'react'

export default class Work extends React.Component{
	showPage(val){
		this.props.showPage(val)
	}
	render(){
		return(
			<div className="container-fluid workSection" id="work">
				<p className="sectionTitle">Projects</p>
				<p className="subTitle">Academic Projects</p>
				<div className="row projectContainer">
					<div className="col-md-3 col-sm-3">
						<a href="https://web.njit.edu/~tpk22/iCourseAssist/frame.html">
							<div className="projectDiv"><i className="fa fa-2x fa-link"></i><br/>
							iCourseFinder App Design</div>
							</a>
					</div>
					<div className="col-md-3 col-sm-3">
						<a href="https://public.tableau.com/views/FinalpptWithFeedback_0/Sheet1World?:embed=y&:display_count=yes">
						<div className="projectDiv"><i className="fa fa-2x fa-bar-chart"></i><br/>
						Data Visulaisation (Tableau)</div></a>
					</div>
					<div className="col-md-3 col-sm-3">
						<a href="https://github.com/tejashreeKate/SparseMatrix-DataType">
							<div className="projectDiv"><i className="fa fa-2x fa-github-square"></i><br/>
							Sparse Matrix Data Type</div>
						</a>
					</div>
					<div className="col-md-3 col-sm-3">
						<a href="https://github.com/tejashreeKate/SentimentAnalysis">
							<div className="projectDiv"><i className="fa fa-2x fa-github-square"></i><br/>
							Sentiment <br/>Analysis</div>
						</a>
					</div>
				</div>
				<p className="subTitle">Personal Projects</p>
				<div className="row projectContainer">
					<div className="col-md-3 col-sm-3">
						<div className="projectDiv1" onClick={this.showPage.bind(this,'resume')}>
						<i className="fa fa-2x fa-globe"></i><br/>
						Online Portfolio</div>
					</div>
					<div className="col-md-3 col-sm-3">
						<div className="projectDiv1" onClick={this.showPage.bind(this,'paintings')}>
						<i className="fa fa-2x fa-paint-brush"></i><br/>
						My paintings</div>
					</div>
					<div className="col-md-3 col-sm-3">
{/*						<div className="projectDiv1">Design Mockups</div>
*/}					</div>
				</div>
			</div>
		)
	}
}