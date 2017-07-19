import React,{Component} from 'react'
class MealtemplateSeven extends Component{
	render(){
		return(
			<div className="wjt_template1">
				<div className="wjt_tem_left">
					<img src={this.props.tem[2].imgURL} title="com" alt="图片错误"></img>
				</div>
				<h2>{this.props.tem[2].title}</h2>
				<h3>{this.props.tem[2].content}</h3>
			</div>

		)
	}
}
export default MealtemplateSeven;