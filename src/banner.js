/**
 * Created by 张亚豪 on 2017/7/18.
 */
import React, { Component } from 'react';
import './zyh.css';

class Banner extends Component {
    render() {
        return (
            <div className="banner">
                <video src="https://www.qifeiye.com/qfy-content/uploads/2016/03/1234.webm" autoPlay='autoPlay' muted="muted" poster="https://www.qifeiye.com/qfy-content/uploads/2016/03/dd8fdac72904e0efbcc4e738fbba329a.jpg" loop="loop" className="zyh-background-video">
                </video>
                <div className="zyh-bannerIn">
                    <div className="zyh-container">
                        <div className="zyh-logo">
                            <div className="zyh-text zyh-text-first zyhP" id="zyhTextFirst">做一个响应式网站</div>
                            <div className="zyh-text zyh-text-second zyhP" id="zyhTextSecond">让世界更好的了解您</div>
                        </div>
                        <p className="zyh-tSecond zyh-tSecondTop">真「响应式」自助建站平台</p>
                        <p className="zyh-tSecond zyh-tSecondBottom">艺术品级模板 引领自助建站潮流</p>
                        <p className="zyh-button">免费创建账户</p>
                        <p className="zyh-decline" id="zyhButton"></p>
                    </div>
                </div>
            </div>
        );
    }
}
export default Banner;