import React,{Component} from 'react'
import Company_introduction from './company_introduction'
import Terms_of_service from './terms_of_service'
import Legal_notice from './legal_notice'
import Disclaimer from './disclaimer'
import Adequate_service from './adequate_service'
import Honor_and_qualification from './honor_and_qualification'
import Contact_me from './contact_me'
import New from './new'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class About_3 extends Component{
	render(){
        return(<Router>
            <div>
               <ul id="box">
                    <li>
                        <p>公司信息</p>
                        <ul>
                            <li><Link to="/Company_introduction">公司介绍</Link></li>
                            <li><Link to="/Terms_of_service">服务条款</Link></li>
                            <li><Link to="/Legal_notice">法律声明</Link></li>
                            <li><Link to="/Disclaimer">免责声明</Link></li>
                            <li><Link to="/Adequate_service">起飞页可接受服务</Link></li>
                        </ul>
                    </li>
                    <li><p><Link to="/Honor_and_qualification">荣誉资质</Link></p></li>
                    <li><p><Link to="/Contact_me">联系客服</Link></p></li>
                    <li><p><Link to="/New">新闻</Link></p></li>
               </ul>
               <div>
                    <Route exact path="/Company_introduction" component={Company_introduction}/>
                    <Route exact path="/Terms_of_service" component={Terms_of_service}/>
                    <Route exact path="/Legal_notice" component={Legal_notice}/>
                    <Route exact path="/Disclaimer" component={Disclaimer}/>
                    <Route exact path="/Adequate_service" component={Adequate_service}/>
                    <Route exact path="/Honor_and_qualification" component={Honor_and_qualification}/>
                    <Route exact path="/Contact_me" component={Contact_me}/>
                    <Route exact path="/New" component={New}/>
               </div>
           </div>
        </Router>)
    }
}
export default About_3;