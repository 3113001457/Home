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
      <ul id="div" className="publick_header clear">
        <div className="header_logo"></div>
        <li><Link to="/">首页</Link></li>
        <li><Link to="/Template">模板</Link></li>
        <li><Link to="/Meal">套餐</Link></li>
        <li className="H_about"><span>关于</span>
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
      <div className="publick-footer">
        <div className="h_footer">
          <div className="line_t"></div>
          <div className="publick_panel_t clear">
            <div className="publick_panel_t_l">
              <h2>起飞页 · 优雅做网站</h2>
              <p>2014年起，专注于响应式建站领域。起飞页是目前国内最专业、最领先的响应式建站平台。</p>
              <div className="publick_panel_t_l_b">
                <p>QQ客服：800088546</p>
                <p>客服热线：4006-285-729 / 0512-62969169</p>
              </div>
            </div>
            <ul className="publick_panel_t_r">
              <li>
                <h2>公司信息</h2>
                <p><a href="">公司介绍</a></p>
                <p><a href="">服务条款</a></p>
                <p><a href="">法律声明</a></p>
                <p><a href="">可接受服务</a></p>
                <p><a href="">免责声明</a></p>
              </li>
              <li>
                <h2>最新资讯</h2>
                <p><a href="">如何减少网站页面相似度？</a></p>
                <p><a href="">企业如何建网站？</a></p>
                <p><a href="">响应式网站建设报价单</a></p>
                <p><a href="">网站推广的方法</a></p>
                <p><a href="">企业如何建网站？</a></p>
                <p><a href="">网站外链越多越好吗？</a></p>
              </li>
              <li>
                 <div className="publick_panel_o_c">
                  <p>工作时间：09:00~19:00（节假日定时响应）</p>
                  <p>为每个用户提供优质的客户服务 让每个人都能自己做出赏心悦目的网站</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="publick_panel_s">
            <p>拓展您的业务，展示您的风采，或者只是尝试一下新的想法。 起飞页自助建站平台，拉近您与互联网的距离！</p>
            <p>版权所有 2013-2017 苏州卡达网络科技有限公司   增值电信业务经营许可证苏B2-20150321 苏ICP备09008221号-3 版本: V3.6</p>
          </div>
        </div>
      </div>
    </div>
  </Router>
);

export default App;

let flag=true;
window.onload=function () {
    window.onscroll=function () {
        let publick_header=document.getElementsByClassName('publick_header');
        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        let num=-70;
        if(scrollTop>=70){
          if(flag){
            flag=false;
            publick_header[0].style.position="fixed";
            publick_header[0].style.top="-70px";
            publick_header[0].style.left="0";
            publick_header[0].style.zIndex="999";
            publick_header[0].style.height="60px";
            publick_header[0].style.marginTop="-10px";
            var time=setInterval(function(){
              num++;
              publick_header[0].style.top=num+"px";
              if(num==0){
                clearInterval(time);
              }
            },7);
          }
        }else if(scrollTop<70){
          flag=true;
          publick_header[0].style.position="static";
          publick_header[0].style.zIndex="999";
          publick_header[0].style.height="70px";
          publick_header[0].style.marginTop="0px";
        }
    };
};
