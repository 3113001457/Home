/**
 * Created by 张亚豪 on 2017/7/13.
 */
import React, { Component } from 'react';
import './zyh.css';
import {ButtonToolbar , Button} from 'react-bootstrap';

class Zyh extends Component {
    render() {
        return (
            <div className="Zyh">
                <div className="zyh-banner">
                    <video src="https://www.qifeiye.com/qfy-content/uploads/2016/03/1234.webm" autoPlay='autoPlay' muted="muted" poster="https://www.qifeiye.com/qfy-content/uploads/2016/03/dd8fdac72904e0efbcc4e738fbba329a.jpg" loop="loop" className="zyh-background-video">
                    </video>
                    <div className="zyh-bannerIn">
                        <div className="zyh-container">
                            <p className="zyh-text zyh-text-first">做一个响应式网站</p>
                            <p className="zyh-text zyh-text-second">让世界更好的了解您</p>
                            <p className="zyh-tSecond zyh-tSecondTop">真「响应式」自助建站平台</p>
                            <p className="zyh-tSecond zyh-tSecondBottom">艺术品级模板 引领自助建站潮流</p>
                            <p className="zyh-button">免费创建账户</p>
                            <p className="zyh-decline"></p>
                        </div>
                    </div>
                </div>
                <div className="zyh-responsive">
                    <div className="zyh-responsiveIn">
                        <div className="zyh-responsiveTop">
                            <p>更快，更简单</p>
                            <p>采用响应式技术构建</p>
                            <p>一次编辑，在所有设备下使用</p>
                        </div>
                        <div className="zyh-responsiveBottom">
                            <img className="zyh-resBotImg" src="http://static.qifeiye.com/caches/2d2bd038d43e773a454cbb4ae76768fb/aHR0cDovL3d3dy5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTcvMDEvZWQ1MDBkYWEzYjlhYjM2ZjNiOWNjMTU5YmFkNDQxZWItMTE2OXg3MjUuanBn.jpg" alt="819b493ad6d2edf8f026c721f1d0e"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Zyh;
