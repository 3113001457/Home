import React,{Component} from 'react'
class MealtemplateSecond extends Component{
	render(){
		return(
			<div className="wjt_template1">
				<div className="wjt_tem_left">
					<img src={this.props.tem[0].imgURL} title="com" alt="图片错误"></img>
				</div>
				<h2>{this.props.tem[0].title}</h2>
				<h3>起飞页为用户提供的网站模板和建站功能均为免费，我们只收取空间和服务器租用费</h3>
			</div>
		)
	}
}
export default MealtemplateSecond;