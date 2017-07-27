/**
 * Created by 张亚豪 on 2017/7/18.
 */
import React, { Component } from 'react';
import './zyh.css';
import video from './video/1234.mp4';
import {

    BrowserRouter as Router,

    Route,

    Link

} from 'react-router-dom'

class Banner extends Component {
    componentDidMount(){
        let video=document.getElementById('video');
        let videoImg=document.getElementById('video-img');
        if(navigator.userAgent.indexOf('MSIE')!=-1 || navigator.userAgent.indexOf('rv')!=-1){
            video.style.display='none';
            videoImg.style.display='block';
        }else{
            video.style.display='block';
            videoImg.style.display='none';
        }
    }
    render() {
        return (
            <div className="banner" id="banner">
                <video id="video" src={video} autoPlay='autoPlay' type="video/mp4" muted="muted" poster="https://www.qifeiye.com/qfy-content/uploads/2016/03/dd8fdac72904e0efbcc4e738fbba329a.jpg" loop="loop" className="zyh-background-video">
                    <source src={video} autoPlay='autoPlay' type="video/ogg" muted="muted" poster="https://www.qifeiye.com/qfy-content/uploads/2016/03/dd8fdac72904e0efbcc4e738fbba329a.jpg" loop="loop"/>
                </video>
                <img id="video-img" src="https://www.qifeiye.com/qfy-content/uploads/2016/03/dd8fdac72904e0efbcc4e738fbba329a.jpg" alt=""/>
                <div className="zyh-bannerIn" id="zyh-bannerIn">
                    <div className="zyh-container">
                        <div className="zyh-logo" id="zyh-logo">
                            <div className="zyh-text zyh-text-first zyhP" id="zyhTextFirst">做一个响应式网站</div>
                            <div className="zyh-text zyh-text-second zyhP" id="zyhTextSecond">让世界更好的了解您</div>
                            <div className="zyh-text-third zyh-text-thirdF">自己做网站</div>
                            <div className="zyh-text-third zyh-text-thirdS">简单又省钱</div>
                        </div>
                        <p className="zyh-tSecond zyh-tSecondTop">真「响应式」自助建站平台</p>
                        <p className="zyh-tSecond zyh-tSecondBottom">艺术品级模板 引领自助建站潮流</p>
                        <p className="zyh-button"><div className="zyh-buttonIn"><span><Link to="/Template">查看模板</Link></span></div></p>
                        <p className="zyh-decline" id="zyhButton"></p>
                    </div>
                </div>
            </div>
        );
    }
}
export default Banner;