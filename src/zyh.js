/**
 * Created by 张亚豪 on 2017/7/13.
 */
import React, { Component } from 'react';
import './zyh.css';

class Zyh extends Component {
    render() {
        return (
            <div className="Zyh">
                {/*banner*/}
                <div className="zyh-banner">
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
                {/*responsive*/}
                <div className="zyh-responsive">
                    <div className="zyh-responsiveIn">
                        <div className="zyh-responsiveTop">
                            <p id="fast" className="zyh-resPFirst">更快<span className="zyh-respFSpan">，</span>更简单</p>
                            <p id="technology" className="zyh-resPSecond">采用响应式技术构建</p>
                            <p id="edit" className="zyh-resPThird">一次编辑<span className="zyh-respTSpan">，</span>在所有设备下使用</p>
                        </div>
                        <div className="zyh-responsiveBottom">
                            <img className="zyh-resBotImg" src="http://static.qifeiye.com/caches/2d2bd038d43e773a454cbb4ae76768fb/aHR0cDovL3d3dy5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTcvMDEvZWQ1MDBkYWEzYjlhYjM2ZjNiOWNjMTU5YmFkNDQxZWItMTE2OXg3MjUuanBn.jpg" alt="819b493ad6d2edf8f026c721f1d0e"/>
                        </div>
                    </div>
                </div>
                {/*main*/}
                <div className="zyh-main">
                    <div className="zyh-mai zyh-maiFirst">
                        <div className="zyh-maiIn">
                            <div className="zyh-left zyh-maiLeftPic" id="Firstleft">
                                <img className="zyh-mainImg" src="http://static.qifeiye.com/caches/2d2bd038d43e773a454cbb4ae76768fb/aHR0cDovL3d3dy5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMTIvMWU4OTk5YzY1NDQ0YjZlMTVlMjZhZDY1Y2VmNjViZWYtMTAyNHg2NDAucG5n.png" alt=""/>
                            </div>
                            <div className="zyh-left zyh-maiRightText zyh-textR zyh-MaL" id="Firstright">
                                <div className="zyh-Rtitle">基于H5模板，快速搭建一个响应式网站</div>
                                <div className="zyh-RtitleB">起飞页™代表着当今响应式自助建站技术的最高水平，没有之一。我们的网站构建器，将传统的编码工作转化为直观的拖拽操作和文字录入。在这里，您仅需花上10分钟便可以完成一个H5响应式网站，您会发现完全不需要编写一行代码，这就是起飞页自助建站的神奇之处。</div>
                            </div>
                        </div>
                    </div>
                    <div className="zyh-mai zyh-maiSecond">
                        <div className="zyh-maiIn">
                            <div className="zyh-left zyh-maiLeftText zyh-textR zyh-MaL" id="Secondleft">
                                <div className="zyh-Rtitle">真正的响应式自助建站，自适应所有设备</div>
                                <div className="zyh-RtitleB">不同于其它假响应式品牌，起飞页采用的是真正的响应式引擎。您只需对网站资料进行一次性输入，网站即可根据访问者的设备智能地呈现出最佳效果，全程无需人工干预。设备包括但不限于：计算机、Pad、微信、手机和电视。</div>
                            </div>
                            <div className="zyh-left zyh-maiRightPic zyh-MaL" id="Secondright">
                                <img className="zyh-mainImg" src="http://static.qifeiye.com/caches/2d2bd038d43e773a454cbb4ae76768fb/aHR0cDovL3d3dy5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMTIvZGIzNWE5ODRiZWRhOTBlM2RmNjIyNmNjMzQ5MTNlZDktMTAyNHg2ODYucG5n.png" alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="zyh-mai zyh-maiThird">
                        <div className="zyh-maiIn">
                            <div className="zyh-left zyh-maiLeftPic" id="Thiredleft">
                                <img className="zyh-mainImg" src="http://static.qifeiye.com/caches/2d2bd038d43e773a454cbb4ae76768fb/aHR0cDovL3d3dy5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMTIvN2UzMThhNTJiMTJkNDk3MmU5NDNiNjg1MjRkODY5ZjctMTAyNHg2OTcucG5n.png" alt=""/>
                            </div>
                            <div className="zyh-left zyh-maiRightText zyh-textR zyh-MaL" id="Thiredright">
                                <div className="zyh-Rtitle">服务器&网络&全球部署</div>
                                <div className="zyh-RtitleB">起飞页自助建站平台全面采用第二代云服务器和云网络。其中，服务器硬件使用最新Xeon处理器、32个物理CPU核心、RAID10存储、ECC内存、SSD硬盘，高配服务器在提供超高性能的同时，更可减少出错几率；另外，优质、昂贵的中港加速网络确保您在大陆地区也可以迅速稳定地打开香港的网站。起飞页拥有中国大陆、中国香港以及全球5个海外云节点可供选择，将网站一键部署到距离客户最近的国家和地区。</div>
                            </div>
                        </div>
                    </div>
                    <div className="zyh-mai zyh-maiFourth">
                        <div className="zyh-maiIn">
                            <div className="zyh-left zyh-maiLeftText zyh-textR zyh-MaL" id="Fourthleft">
                                <div className="zyh-Rtitle">全面的搜索引擎优化 轻松获得更高排名</div>
                                <div className="zyh-RtitleB">谁说自助建站的SEO效果就一定差？
                                    无需额外设置，平台自动为您生成网站地图（sitemap），帮助搜索引擎全面地对网站进行索引；同时，页面标题、页面描述以及静态化链接技术也可以帮助您更加轻松地获得较高的关键词排名。</div>
                            </div>
                            <div className="zyh-left zyh-maiRightPic zyh-MaL" id="Fourthright">
                                <img className="zyh-mainImg" src="http://static.qifeiye.com/caches/2d2bd038d43e773a454cbb4ae76768fb/aHR0cDovL3d3dy5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMTIvNWQ2MDZmNjI0YTMwOGQwZTI3MjU4YTBkODJhNDJjNGUtMTAyNHg2NDEucG5n.png" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Zyh;

window.onload=function () {
    let zyhSpan=document.getElementById('zyhSpan');
    let zyhTextFirst=document.getElementById('zyhTextFirst');
    let zyhTextSecond=document.getElementById('zyhTextSecond');
    let zyhButton=document.getElementById('zyhButton');
    let fast=document.getElementById('fast');
    let technology=document.getElementById('technology');
    let edit=document.getElementById('edit');
    let Firstleft=document.getElementById('Firstleft');
    let Firstright=document.getElementById('Firstright');
    let Secondleft=document.getElementById('Secondleft');
    let Secondright=document.getElementById('Secondright');
    let Thiredleft=document.getElementById('Thiredleft');
    let Thiredright=document.getElementById('Thiredright');
    let Fourthleft=document.getElementById('Fourthleft');
    let Fourthright=document.getElementById('Fourthright');
    let timer=null;
    let timer2=null;
    let num=0;
    let num2=0;
    zyhTextFirst.style.display='none';
    zyhTextSecond.style.display='none';
    // setInterval(function () {
    //     zyhSpan.style.opacity='1';
    //     setTimeout(function () {
    //         zyhSpan.style.opacity='0'
    //     },400)
    // },800);
    timer=setInterval(function () {
        zyhTextFirst.style.display='block';
        if(num>=300){
            clearInterval(timer);
        }
        num+=40;
        zyhTextFirst.style.width=num+'px';
    },250);
    setTimeout(function () {
        zyhTextSecond.style.display='block';
        timer2=setInterval(function () {
            if(num2>=320){
                clearInterval(timer2);
            }
            num2+=40;
            zyhTextSecond.style.width=num2+'px';
        },250);
    },3000);
    window.onscroll=function () {
        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        num=scrollTop;
        console.log(scrollTop);
        let timer=null;
        zyhButton.onclick= () => {
            timer=setInterval(function () {
                if(num>=930){
                    clearInterval(timer)
                }
                num += 10;
                document.body.scrollTop = document.documentElement.scrollTop = num;
            },10)
        };
        if(num >= 520) {
            fast.style.opacity = '1';
            fast.style.transition = '1.5s';
            fast.style.marginTop = '0';
            technology.style.opacity = '1';
            technology.style.transition = '1.5s';
            technology.style.marginTop = '30px';
            edit.style.opacity = '1';
            edit.style.transition = '1.5s';
            edit.style.marginTop = '13px';
        }
        if(num>=1640 && num<=1660){
            Firstleft.style.left='0';
            Firstright.style.opacity='1';
        }
        if(num>=1940 && num<=1960){
            Secondright.style.right='0';
            Secondleft.style.opacity='1';
        }
        if(num>=2540 && num<=2560){
            Thiredleft.style.left='0';
            Thiredright.style.opacity='1';
        }
        if(num>=3140 && num<=3160){
            Fourthright.style.right='0';
            Fourthleft.style.opacity='1';
        }
    };
};
