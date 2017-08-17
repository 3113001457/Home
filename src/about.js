import React,{Component} from 'react'
import Company_introduction from './company_introduction'
import Terms_of_service from './terms_of_service'
import Legal_notice from './legal_notice'
import Disclaimer from './disclaimer'
import Adequate_service from './adequate_service'
import Honor_and_qualification from './honor_and_qualification'
import Contact_me from './contact_me'
import New from './new'

import { HashRouter as Router, Route ,Link} from 'react-router-dom'
import createHistory from 'history/createHashHistory'
const history = createHistory();

const About=({match})=>(
          <div>
             <div className="wjt_navv">
                <Route path={`${match.url}/Company_introduction`} component={Company_introduction}/>
                <Route path={`${match.url}/Terms_of_service`} component={Terms_of_service}/>
                <Route path={`${match.url}/Legal_notice`} component={Legal_notice}/>
                <Route path={`${match.url}/Disclaimer`} component={Disclaimer}/>
                <Route path={`${match.url}/Adequate_service`} component={Adequate_service}/>
                <Route path={`${match.url}/Honor_and_qualification`} component={Honor_and_qualification}/>
                <Route path={`${match.url}/Contact_me`} component={Contact_me}/>
                <Route path={`${match.url}/New`} component={New}/>
                 <ul id="box">
                 <li>
                     <p>公司信息</p>
                     <ul>
                         <Link to={`${match.url}/Company_introduction`}><li><span></span>公司介绍</li></Link>
                         <Link to={`${match.url}/Terms_of_service`}><li><span></span>服务条款</li></Link>
                         <Link to={`${match.url}/Legal_notice`}><li><span></span>法律声明</li></Link>
                         <Link to={`${match.url}/Disclaimer`}><li><span></span>免责声明</li></Link>
                         <Link to={`${match.url}/Adequate_service`}><li><span></span>鲜橙科技可接受服务</li></Link>
                     </ul>
                 </li>
                 <Link to={`${match.url}/Honor_and_qualification`}><li><p><span></span>荣誉资质</p></li></Link>
                 <Link to={`${match.url}/New`}><li><p><span></span>新闻</p></li></Link>
             </ul>
             </div>

         </div>
);
export default About;
