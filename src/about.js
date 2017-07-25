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



class About extends Component{

  render(){
        return(<Router>
            <div>
               <div className="wjt_nav">
                  <Route exact path="/Company_introduction" component={Company_introduction}/>
                  <Route exact path="/Terms_of_service" component={Terms_of_service}/>
                  <Route exact path="/Legal_notice" component={Legal_notice}/>
                  <Route exact path="/Disclaimer" component={Disclaimer}/>
                  <Route exact path="/Adequate_service" component={Adequate_service}/>
                  <Route exact path="/Honor_and_qualification" component={Honor_and_qualification}/>
                  <Route exact path="/Contact_me" component={Contact_me}/>
                  <Route exact path="/New" component={New}/>
                   <ul id="box">
                   <li>
                       <p>公司信息</p>
                       <ul>
                           <Link to="/Company_introduction"><li><span></span>公司介绍</li></Link>
                           <Link to="/Terms_of_service"><li><span></span>服务条款</li></Link>
                           <Link to="/Legal_notice"><li><span></span>法律声明</li></Link>
                           <Link to="/Disclaimer"><li><span></span>免责声明</li></Link>
                           <Link to="/Adequate_service"><li><span></span>起飞页可接受服务</li></Link>
                       </ul>
                   </li>
                   <Link to="/Honor_and_qualification"><li><p><span></span>荣誉资质</p></li></Link>
                   <Link to="/Contact_me"><li><p><span></span>联系客服</p></li></Link>
                   <Link to="/New"><li><p><span></span>新闻</p></li></Link>
               </ul>
               </div>

           </div>

        </Router>)

    }

}

export default About;
