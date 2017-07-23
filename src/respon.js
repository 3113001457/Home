/**
 * Created by 张亚豪 on 2017/7/18.
 */
import React, { Component } from 'react';
import './zyh.css';
class Respon extends Component {
    render() {
        return (
            <div className="zyh-responsive" id="responsive">
                <div className="zyh-responsiveIn">
                    <div className="zyh-responsiveTop">
                        <p className="zyh-resPFirst"><div id="fast" className="zyh-fastDiv"><span className="zyh-tranTextFirst">更快<span className="zyh-respFSpan">，</span>更简单</span></div></p>
                        <p className="zyh-resPSecond"><div id="technology" className="zyh-technologyDiv"><span className="zyh-tranTextSecond">采用响应式技术构建</span></div></p>
                        <p className="zyh-resPThird"><div id="edit" className="zyh-editDiv"><span className="zyh-tranTextThird">一次编辑<span className="zyh-respTSpan">，</span>在所有设备下使用</span></div></p>
                    </div>
                    <div className="zyh-responsiveBottom">
                        <img className="zyh-resBotImg" src="http://static.qifeiye.com/caches/2d2bd038d43e773a454cbb4ae76768fb/aHR0cDovL3d3dy5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTcvMDEvZWQ1MDBkYWEzYjlhYjM2ZjNiOWNjMTU5YmFkNDQxZWItMTE2OXg3MjUuanBn.jpg" alt="819b493ad6d2edf8f026c721f1d0e"/>
                    </div>
                </div>
            </div>
        );
    }
}
export default Respon;
