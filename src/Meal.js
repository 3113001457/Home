import React,{Component} from 'react'
import MealtemplateFirst from './Meal_template1'
import MealtemplateSecond from './Meal_template2';
import MealtemplateThree from './Meal_template3';
class Meal extends Component{
	constructor(){
		super()
		this.state={
			template1:[{title:'1F 基础套餐',imgURL:"http://static.qifeiye.com/caches/2d2bd038d43e773a454cbb4ae76768fb/aHR0cDovL3d3dy5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMTIvZDliYTU5MWNjMWRlMDBlYzU4YmJkZDIwNGYxZjkzMjIucG5nP2F0dGFjaG1lbnRfaWQ9MzQ1MDQ_p_p100_p_3D.png",content:"起飞页为用户提供的网站模板和建站功能均为免费，我们只收取空间和服务器租用费"}],
			template2:[{title:["套餐名称","适用对象","域名"]},{title:["套餐名称","适用对象","域名"]},{title:["套餐名称","适用对象","域名"]}]
		}
	}      
	render(){
		return(
			<div>
				<MealtemplateFirst/>
				<MealtemplateSecond tem={this.state.template1}/>
				<MealtemplateThree tem={this.state.template2}/>
			</div>

		)
	}
}

export default Meal;