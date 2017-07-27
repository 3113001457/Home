import React,{ Component } from 'react';
import Home from './Home'
import Template from './Template'
import Meal from './Meal'
import About from './about'
import logo from './images/鲜橙logo_03.png'
import cha from './images/cha.png'
import gang from './images/gang.png'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
class App extends Component {
    componentDidMount(){
      let flag=true;
      let lis=document.querySelectorAll(".publick_header>li");
      document.documentElement.style.fontSize=document.documentElement.clientWidth/13.66+'px';
      window.onresize=function(){
        document.documentElement.style.fontSize=document.documentElement.clientWidth/13.66+'px';
      };
      function addEvent(obj,type,fn){
          if(obj.attachEvent){
              obj.attachEvent('on'+type,function(){
                  fn.call(obj);
              })
          }else{
              obj.addEventListener(type,fn,false);
          }
      }
      addEvent(window,'scroll',function(){
        let publick_header=document.getElementsByClassName('publick_header');
        let header_logo=document.getElementsByClassName('header_logo');
        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        let w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
      	let falgs=document.getElementsByClassName("falgs");
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
	        if(w<992){
	            header_logo[0].style.top='15px';
	            header_logo[0].style.left='20px';
	            header_logo[0].style.marginTop='0';
	            header_logo[0].style.marginLeft='0';
          		falgs[0].style.top="10px";
            }
            var time=setInterval(function(){
              num+=1;
              publick_header[0].style.top=num+"px";
              if(num>0){
                publick_header[0].style.top=0;
                clearInterval(time);
              }
            },7);
          }
        }else if(scrollTop<70){
          flag=true;
          if(w<992){
          	header_logo[0].style.position="absolute";
      			header_logo[0].style.top="50%";
      			header_logo[0].style.left="50%";
      			header_logo[0].style.marginTop="-20px";
      			header_logo[0].style.marginLeft="-60px";
	        publick_header[0].style.marginTop="0";
	        publick_header[0].style.height="72px";
          	falgs[0].style.top="20px";
          }else if(w>992){
          	  header_logo[0].style.position="static";
	          publick_header[0].style.position="relative";
	          publick_header[0].style.zIndex="999";
	          publick_header[0].style.height="72px";
	          publick_header[0].style.marginTop="0";
          }
        }
      });
    }
    click(){
      document.body.scrollTop=0;
      document.documentElement.scrollTop=0;
    }

    falseclick(){
      let falgs=document.getElementsByClassName("falgs");
      let box=document.getElementsByClassName("box");
      let bool=null;
      box[0].style.display=="block"?(box[0].style.display="none",bool=false):(box[0].style.display="block",bool=true);
      if(bool){
        box[0].style.position="fixed";
        falgs[0].style.left="0.3rem";
        box[0].style.zIndex="1002";
        box[0].style.top="0";
        box[0].style.right="0";
      }else{
        falgs[0].style.left="12.7rem";
      }
    }

    render() {
        return (
          <Router>
            <div>
              <ul id="div" className="publick_header clear">
                <div className="header_logo"><img src={logo} alt=""/></div>
                <div className="falgs" onClick={this.falseclick}><img src={gang} alt=""/></div>
                <div className="box">
                  <li onClick={this.click}><Link to="/">首页</Link></li>
                  <li onClick={this.click}><Link to="/Template">模板</Link></li>
                  <li onClick={this.click}><Link to="/Meal">套餐</Link></li>
                  <li className="H_about"><span>关于</span>
                      <ul className="aboutList" ref="about_list">
                        <p className="line"></p>
                        <div className="H_listC clear">
                          <div className="aboutL clear">
                            <li><Link to="" className="list_O">公司信息</Link></li>
                            <li><Link to="/About/Company_introduction">公司介绍</Link></li>
                            <li><Link to="/About/Terms_of_service">服务条款</Link></li>
                            <li><Link to="/About/Legal_notice">法律声明</Link></li>
                            <li><Link to="/About/Adequate_service">可接受服务</Link></li>
                            <li><Link to="/About/Disclaimer">免责声明</Link></li>
                          </div>
                          <div className="aboutC clear">
                            <li><a href="" className="list_O">荣誉资质</a></li>
                            <div className="clear"><a href="" className="clear">
                              <img src="http://static.qifeiye.com/caches/2d2bd038d43e773a454cbb4ae76768fb/aHR0cDovL3d3dy5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMTIvYTg2ZGZmNWFiYmQ0MjU1OWM2ZTY3ZDFkZGIzMDNlMmItMTIweDU1LmpwZw_p_p100_p_3D_p_p100_p_3D.jpg" alt=""/>
                              <span></span>
                            </a></div>
                            <div className="clear"><a href="" className="clear">
                              <img src="http://static.qifeiye.com/caches/2d2bd038d43e773a454cbb4ae76768fb/aHR0cDovL3d3dy5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMTIvYTg2ZGZmNWFiYmQ0MjU1OWM2ZTY3ZDFkZGIzMDNlMmItMTIweDU1LmpwZw_p_p100_p_3D_p_p100_p_3D.jpg" alt="" />
                              <span></span>
                            </a></div>
                            <div className="clear"><a href="" className="clear">
                              <img src="http://static.qifeiye.com/caches/2d2bd038d43e773a454cbb4ae76768fb/aHR0cDovL3d3dy5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMTIvYTg2ZGZmNWFiYmQ0MjU1OWM2ZTY3ZDFkZGIzMDNlMmItMTIweDU1LmpwZw_p_p100_p_3D_p_p100_p_3D.jpg" alt="" />
                              <span></span>
                            </a></div>
                            <div className="clear"><a href="" className="clear">
                              <img src="http://static.qifeiye.com/caches/2d2bd038d43e773a454cbb4ae76768fb/aHR0cDovL3d3dy5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMTIvYTg2ZGZmNWFiYmQ0MjU1OWM2ZTY3ZDFkZGIzMDNlMmItMTIweDU1LmpwZw_p_p100_p_3D_p_p100_p_3D.jpg" alt="" />
                              <span></span>
                            </a></div>
                          </div>
                          <div className="aboutR clear">
                            <li><a href="" className="list_O">联系客服</a></li>
                            <p><a href="">客户服务热线</a></p>
                            <p><a href="" className="color_r">4006-285-729</a></p>
                            <p><a href="">QQ客户中心</a></p>
                            <p><a href="" className="color_r">800088546</a></p>
                            <p><a href="">公司地址</a></p>
                            <p><a href="" className="color_r">xx.xx.xx.xx</a></p>
                          </div>
                        </div>
                      </ul>
                  </li>
                </div>
              </ul>
              <Route exact path="/" component={Home}/>
              <Route path="/Template" component={Template}/>
              <Route path="/Meal" component={Meal}/>
              <Route path="/About" component={About}/>
              <div className="publick-footer">
                <div className="h_footer">
                  <div className="line_t"></div>
                  <div className="publick_panel_t clear">
                    <div className="publick_panel_t_l">
                      <h2>鲜橙科技 · 优雅做网站</h2>
                      <p>2017年起，专注于响应式建站领域。鲜橙科技是目前国内最专业、最领先的响应式建站平台。</p>
                      <div className="publick_panel_t_l_b">
                        <p>QQ客服：516612952</p>
                        <p>客服热线：xxxxxxxxx / xxxxxxxxxx</p>
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
                    <p>拓展您的业务，展示您的风采，或者只是尝试一下新的想法。鲜橙科技自助建站平台，拉近您与互联网的距离！</p>
                    <p>版权所有 2013-2017 鲜橙科技 增值电信业务经营许可证京A1-23456789 京ICP备01234567号-3 版本: V3.6</p>
                  </div>
                </div>
              </div>
            </div>
          </Router>
        );
    }
}
export default App;