import React,{Component} from 'react'
class MealtemplateThree extends Component{
	render(){
		return(
			<div className="wjt_template2">
				{this.props.tem.map((item,i)=>{
					return(
						<ul>
							{this.props.tem[i].title.map((item)=>{
								return(
									<li>{item}</li>
								)
							})}
						</ul>
					)
				})}
			</div>
		)
	}
}
export default MealtemplateThree;