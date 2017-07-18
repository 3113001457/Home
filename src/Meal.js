import React,{Component} from 'react'
import MealtemplateFirst from './Meal_template1'
import MealtemplateSecond from './Meal_template2';
import MealtemplateThree from './Meal_template3';
import MealtemplateFour from './Meal_template4';
import MealtemplateFive from './Meal_template5';
import MealtemplateSix from './Meal_template6';
import MealtemplateSeven from './Meal_template7';
import MealtemplateEigth from './Meal_template8';
class Meal extends Component{
	constructor(){
		super()
		this.state={
			template1:[{title:'1F 基础套餐',imgURL:"http://static.qifeiye.com/caches/2d2bd038d43e773a454cbb4ae76768fb/aHR0cDovL3d3dy5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMTIvZDliYTU5MWNjMWRlMDBlYzU4YmJkZDIwNGYxZjkzMjIucG5nP2F0dGFjaG1lbnRfaWQ9MzQ1MDQ_p_p100_p_3D.png",content:"起飞页为用户提供的网站模板和建站功能均为免费，我们只收取空间和服务器租用费"},{title:'2F 网站代建服务',imgURL:"http://static.qifeiye.com/caches/2d2bd038d43e773a454cbb4ae76768fb/aHR0cDovL3d3dy5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMTIvZmMyMjg1ZGRmYzc0Y2U0YjA4MDlmZThlYTI1OGVjMjMucG5nP2F0dGFjaG1lbnRfaWQ9MzQ1MDI_p_p100_p_3D.png",content:"由专业建站师为您量身制作网站，您仅需联系客服、购买服务、传送资料，1-2个工作日就可“坐享其成”。"},{title:'3F 网站代建服务',imgURL:"http://static.qifeiye.com/caches/2d2bd038d43e773a454cbb4ae76768fb/aHR0cDovL3d3dy5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMTIvNTFjYTU1ZWNkMDdjNDNmNmE5ZDU5MzdlNTczYTM2NzEucG5nP2F0dGFjaG1lbnRfaWQ9MzQ1MDM_p_p100_p_3D.png",content:" 零风险，不满意100%全额退款承诺"}],
			template2:[{title:["套餐名称","适用对象","域名"]},{title:["套餐名称","适用对象","域名"]},{title:["套餐名称","适用对象","域名"]}]
		}
	}      
	render(){
		return(
			<div>
				<MealtemplateFirst/>
				<div className="wjt_modulemodule">
					<MealtemplateSecond tem={this.state.template1}/>
					<MealtemplateThree tem={this.state.template2}/>
					<MealtemplateFour tem={this.state.template1}/>
					<MealtemplateFive/>
					<MealtemplateSix/>
					<MealtemplateSeven  tem={this.state.template1}/>
					<MealtemplateEigth/>
				</div>
			</div>

		)
	}
}

export default Meal;