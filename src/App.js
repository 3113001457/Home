import React from 'react'
import Home from './Home'
import Template from './Template'
import Meal from './Meal'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const App = () => (
  <Router>
    <div>
      <ul className="publick_header clear">
        <div className="header_logo"></div>
        <li><Link to="/">首页</Link></li>
        <li><Link to="/Template">模板</Link></li>
        <li><Link to="/Meal">套餐</Link></li>
        <li className="H_about"><a href="">关于</a>
            <ul className="aboutList">
              <p className="line"></p>
              <div className="H_listC">
                <div className="aboutL">
                  <li><a href="" className="list_O">公司信息</a></li>
                  <li><a href="">公司介绍</a></li>
                  <li><a href="">服务条款</a></li>
                  <li><a href="">法律声明</a></li>
                  <li><a href="">可接受服务</a></li>
                  <li><a href="">免责声明</a></li>
                </div>
                <div className="aboutC">
                  <li><a href="" className="list_O">荣誉资质</a></li>
                  <div className="clear"><a href="">
                    <img src="http://static.qifeiye.com/caches/2d2bd038d43e773a454cbb4ae76768fb/aHR0cDovL3d3dy5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMTIvYTg2ZGZmNWFiYmQ0MjU1OWM2ZTY3ZDFkZGIzMDNlMmItMTIweDU1LmpwZw_p_p100_p_3D_p_p100_p_3D.jpg" alt=""/>
                    <span></span>
                  </a></div>
                  <div className="clear"><a href="">
                    <img src="http://static.qifeiye.com/caches/2d2bd038d43e773a454cbb4ae76768fb/aHR0cDovL3d3dy5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMTIvYTg2ZGZmNWFiYmQ0MjU1OWM2ZTY3ZDFkZGIzMDNlMmItMTIweDU1LmpwZw_p_p100_p_3D_p_p100_p_3D.jpg" alt="" />
                    <span></span>
                  </a></div>
                  <div className="clear"><a href="">
                    <img src="http://static.qifeiye.com/caches/2d2bd038d43e773a454cbb4ae76768fb/aHR0cDovL3d3dy5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMTIvYTg2ZGZmNWFiYmQ0MjU1OWM2ZTY3ZDFkZGIzMDNlMmItMTIweDU1LmpwZw_p_p100_p_3D_p_p100_p_3D.jpg" alt="" />
                    <span></span>
                  </a></div>
                  <div className="clear"><a href="">
                    <img src="http://static.qifeiye.com/caches/2d2bd038d43e773a454cbb4ae76768fb/aHR0cDovL3d3dy5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMTIvYTg2ZGZmNWFiYmQ0MjU1OWM2ZTY3ZDFkZGIzMDNlMmItMTIweDU1LmpwZw_p_p100_p_3D_p_p100_p_3D.jpg" alt="" />
                    <span></span>
                  </a></div>
                </div>
                <div className="aboutR">
                  <li><a href="" className="list_O">联系客服</a></li>
                  <p><a href="">客户服务热线</a></p>
                  <p><a href="" className="color_r">4006-285-729</a></p>
                  <p><a href="">QQ客户中心</a></p>
                  <p><a href="" className="color_r">800088546</a></p>
                  <p><a href="">公司地址</a></p>
                  <p><a href="" className="color_r">苏州市工业园区加城大厦F4-D2</a></p>
                </div>
              </div>
            </ul>
        </li>
      </ul>
      <Route exact path="/" component={Home}/>
      <Route path="/Template" component={Template}/>
      <Route path="/Meal" component={Meal}/>
    </div>
  </Router>
)

export default App;
