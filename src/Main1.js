/**
 * Created by 张亚豪 on 2017/7/18.
 */
import React, { Component } from 'react';
import './zyh.css';

class Main1 extends Component {
    render() {
        return (
            <div className="Main1">
                <div className="zyh-mai zyh-maiFirst">
                    <div className="zyh-maiIn">
                        <div className="zyh-left zyh-maiLeftPic" id="Firstleft">
                            <img className="zyh-mainImg"
                                 src="http://static.qifeiye.com/caches/2d2bd038d43e773a454cbb4ae76768fb/aHR0cDovL3d3dy5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMTIvMWU4OTk5YzY1NDQ0YjZlMTVlMjZhZDY1Y2VmNjViZWYtMTAyNHg2NDAucG5n.png"
                                 alt=""/>
                        </div>
                        <div className="zyh-left zyh-maiRightText zyh-textR zyh-MaL" id="Firstright">
                            <div className="zyh-Rtitle">基于H5模板，快速搭建一个响应式网站</div>
                            <div className="zyh-RtitleB">
                                起飞页™代表着当今响应式自助建站技术的最高水平，没有之一。我们的网站构建器，将传统的编码工作转化为直观的拖拽操作和文字录入。在这里，您仅需花上10分钟便可以完成一个H5响应式网站，您会发现完全不需要编写一行代码，这就是起飞页自助建站的神奇之处。
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Main1;
