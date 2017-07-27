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
        let bodyW=document.body.offsetWidth;
        let nav=document.getElementById('nav');
        let head=document.getElementById('head');
        let off=document.getElementById('off');
        let bool=document.getElementById('bool');
        let scro=document.getElementById('scro');
        let scroHeight=scro.offsetHeight
        document.documentElement.style.fontSize=document.documentElement.clientWidth/13.66+'px';
        window.onresize=function(){

            if(bodyW>992){
                nav.style.width=8+"rem";
                head.style.height="70px";
                nav.style.transition="0s";
                off.style.display='none'
                bool.style.display='none'
            }else{
                nav.style.width=0+"rem";
                nav.style.transition="0s";
                head.style.height="70px";
                bool.style.display='block'

            }
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
            let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            let num=scrollTop;
            let head=document.getElementById('head');
            let t=null;
            let nums=-70;
            if(num>=scroHeight){
                scro.style.position="fixed";
                scro.style.top=0+'px';
                // t=setInterval(()=> {
                //     nums++;
                //     if(nums>=0){
                //         clearInterval(t);
                //         nums=-70;
                //         return
                //     }
                //     scro.style.top=nums+'px';
                // },10)
            }else {
                scro.style.top=0+'px';
                scro.style.position="relative";
            }
        });
    }
    handleClick(){
        let bodyW=document.body.offsetWidth;
        if(bodyW<992){
            this.refs.bool.style.display="none"
            this.refs.off.style.display="block"
            this.refs.nav.style.width=100+"%";
            this.refs.nav.style.transition="0.7s";
            this.refs.head.style.height="409px";
        }
    }
    handleClick1(){
        let bodyW=document.body.offsetWidth;
        if(bodyW<992){
            this.refs.bool.style.display="block"
            this.refs.off.style.display="none"
            this.refs.nav.style.width=0+"rem";
            this.refs.head.style.height="70px";
        }

    }
    handleMouseover(){
        let bodyW=document.body.offsetWidth;
        if(bodyW<992){
            this.refs.guanyu.style.height=250+'px';
        }else if(bodyW>992){
            this.refs.guanyu.style.height=263+'px';
        }

    }
    handleOut(){
        this.refs.guanyu.style.height=0+'px';
    }
    click(){
      document.body.scrollTop=0;
      document.documentElement.scrollTop=0;
    }
    render() {
        return (
          <Router>
            <div>
              <div className="wjt_head" id="scro">
                <div className="wjt_header" ref="head" id="head">
                  <div className="wjt_logo"><img src={logo} style={{width:160+'px'}} alt=""/></div>
                  <ul className="wjt_nav" ref="nav" id="nav">
                    <div id="off" ref="off" className="wjt_off  glyphicon glyphicon-remove" onClick={this.handleClick1.bind(this)}></div>
                    <li onClick={this.click.bind(this)}><Link to="/"><span></span>首页</Link></li>
                    <li onClick={this.click.bind(this)}><Link to="/Template">模板</Link></li>
                    <li onClick={this.click.bind(this)}><Link to="/Meal">套餐</Link></li>
                    <li onMouseOver={this.handleMouseover.bind(this)} onMouseOut={this.handleOut.bind(this)}><Link to="select">关于</Link>
                      <div className="wjt_guanyu"  ref="guanyu">
                          <ul className="aboutLists">
                              <div className="H_listCs">
                                  <ul className="aboutLs">
                                      <li className="list_Os">公司信息</li>
                                      <li>
                                          <Link to="/About/Company_introduction">公司介绍</Link></li>
                                      <li>
                                          <Link to="/About/Terms_of_service">服务条款</Link></li>
                                      <li>
                                          <Link to="/About/Legal_notice">法律声明</Link></li>
                                      <li>
                                          <Link to="/About/Adequate_service">可接受服务</Link></li>
                                      <li>
                                          <Link to="/About/Disclaimer">免责声明</Link></li>
                                  </ul>
                                  <ul className="aboutLs">
                                      <p><a href="" className="list_Os">荣誉资质</a></p>
                                      <li><a href="">
                                          <img src="http://static.qifeiye.com/caches/2d2bd038d43e773a454cbb4ae76768fb/aHR0cDovL3d3dy5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMTIvYTg2ZGZmNWFiYmQ0MjU1OWM2ZTY3ZDFkZGIzMDNlMmItMTIweDU1LmpwZw_p_p100_p_3D_p_p100_p_3D.jpg"
                                               alt=""/>
                                          <span></span>
                                      </a></li>
                                      <li><a href="">
                                          <img src="http://static.qifeiye.com/caches/2d2bd038d43e773a454cbb4ae76768fb/aHR0cDovL3d3dy5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMTIvYTg2ZGZmNWFiYmQ0MjU1OWM2ZTY3ZDFkZGIzMDNlMmItMTIweDU1LmpwZw_p_p100_p_3D_p_p100_p_3D.jpg"
                                               alt=""/>
                                          <span></span>
                                      </a></li>
                                      <li><a href="">
                                          <img src="http://static.qifeiye.com/caches/2d2bd038d43e773a454cbb4ae76768fb/aHR0cDovL3d3dy5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMTIvYTg2ZGZmNWFiYmQ0MjU1OWM2ZTY3ZDFkZGIzMDNlMmItMTIweDU1LmpwZw_p_p100_p_3D_p_p100_p_3D.jpg"
                                               alt=""/>
                                          <span></span>
                                      </a></li>
                                      <li><a href="">
                                          <img src="http://static.qifeiye.com/caches/2d2bd038d43e773a454cbb4ae76768fb/aHR0cDovL3d3dy5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMTIvYTg2ZGZmNWFiYmQ0MjU1OWM2ZTY3ZDFkZGIzMDNlMmItMTIweDU1LmpwZw_p_p100_p_3D_p_p100_p_3D.jpg"
                                               alt=""/>
                                          <span></span>
                                      </a></li>
                                  </ul>
                                  <ul className="aboutLs">
                                      <p className="list_Os">联系客服</p>
                                      <li><a href="">客户服务热线</a></li>
                                      <li><a href="" className="color_rs">4006-285-729</a></li>
                                      <li><a href="">QQ客户中心</a></li>
                                      <li><a href="" className="color_rs">800088546</a></li>
                                      <li><a href="">公司地址</a></li>
                                      <li><a href="" className="color_rs">xx.xx.xx.xx</a></li>
                                  </ul>
                              </div>
                          </ul>
                      </div>
                    </li>
                  </ul>
                  <div id="bool" ref="bool" className="wjt_bool glyphicon glyphicon-align-justify" onClick={this.handleClick.bind(this)}></div>
                </div>

              </div>
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