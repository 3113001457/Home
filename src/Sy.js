/**
 * Created by Administrator on 2017/7/17.
 */
import React, {Component} from 'react';

class Sy extends Component {
    constructor(props){
        super(props);
    }

    render() {

        return (
            <div className="Sy">
                <Sy_query />
                <Sy_friend />
                <Sy_Contain />
            </div>
        )
    }
}
class Sy_Contain extends Component {
    constructor(props){
        super(props);
        this.state= {
            Json:false

        }
    }
    componentDidMount(){
        function Ajax(opt){
            if(window.XMLHttpRequest){
                var xhr = new XMLHttpRequest();
            }
            else{
                var xhr = new window.ActiveXObject("Microsoft.XMLHTTP");
            }
            if(opt.type=='get'){
                xhr.open(opt.type,opt.url+'?'+JsonToString(opt.data),true);
                xhr.send();
            }
            else if(opt.type=='post'){
                xhr.open(opt.type,opt.url,true);
                xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
                xhr.send(JsonToString(opt.data));
            }
            xhr.onreadystatechange = function(){
                if(xhr.readyState == 4){
                    if(xhr.status>=200&&xhr.status<300||xhr.status==304){
                        opt.success(xhr.responseText);
                    }
                    else{
                        opt.error()
                    }
                }
            };
            function JsonToString(json){
                var arr = [];
                for(var i in json){
                    arr.push(i+'='+json[i])
                }
                return arr.join('&');
            };
        };
        Ajax({
            type:'get',
            data:{},
            url:'http://localhost:6416/demod/demo',
            success:function(da){
                var Json=JSON.parse(da);
                this.setState({
                    Json:Json,
                });
            }.bind(this)
        });
    }
    render() {
        if(this.state.Json){
            return (
                <div className="sy_Con">
                    <div className="sy_Con_tit">
                        <h2>客户反馈</h2>
                    </div>
                    <div id="myCarousel" className="carousel slide sy_carousel">
                        <ol className="carousel-indicators" id="sy_carousel-indicators">
                            <li data-target="#myCarousel" data-slide-to="0" className="active sy_active"></li>
                            <li data-target="#myCarousel" data-slide-to="1"></li>
                            <li data-target="#myCarousel" data-slide-to="2"></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="item active sy_item">
                                <span><img src={this.state.Json[0].img} alt=""/></span>
                                <p>
                                    <span>{this.state.Json[0].text}</span>
                                    <b>{this.state.Json[0].name}</b>
                                </p>
                            </div>
                            <div className="item sy_item">
                                <span><img src={this.state.Json[1].img} alt=""/></span>
                                <p>
                                    <span>{this.state.Json[1].text}</span>
                                    <b>{this.state.Json[1].name}</b>
                                </p>
                            </div>
                            <div className="item sy_item">
                                <span><img src={this.state.Json[2].img} alt=""/></span>

                                <p>
                                    <span>{this.state.Json[2].text}</span>
                                    <b>{this.state.Json[2].name}</b>
                                </p>
                            </div>
                        </div>
                        <a className="left sy_btnLeftCon" href="#myCarousel"
                           data-slide="prev">

                        </a>
                        <a className="right sy_btnRightCon" href="#myCarousel"
                           data-slide="next">
                        </a>
                    </div>
                </div>

            )
        }else{
            return (
                <div className="sy_Con">
                    <div className="sy_Con_tit">
                        <h2>客户反馈</h2>
                    </div>

                    <div id="myCarousel" className="carousel slide sy_carousel">
                        <ol className="carousel-indicators" id="sy_carousel-indicators">
                            <li data-target="#myCarousel" data-slide-to="0" className="active sy_active"></li>
                            <li data-target="#myCarousel" data-slide-to="1"></li>
                            <li data-target="#myCarousel" data-slide-to="2"></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="item active sy_item">
                                <span></span>
                                <p>
                                    <span></span>
                                    <b></b>

                                </p>
                            </div>
                            <div className="item sy_item">
                                <span></span>
                                <p>
                                    <span></span>
                                    <b></b>
                                </p>
                            </div>
                            <div className="item sy_item">
                                <span></span>
                                <p>
                                    <span></span>
                                    <b></b>
                                </p>
                            </div>
                        </div>
                        <a className="left sy_btnLeftCon" href="#myCarousel"
                           data-slide="prev">

                        </a>
                        <a className="right sy_btnRightCon" href="#myCarousel"
                           data-slide="next">
                        </a>
                    </div>
                </div>

            )
        }

    }
}
class Sy_friend extends Component {
    constructor(props){
        super(props);
        this.state={
            jsonFri:{
                fri_img:['http://static.qifeiye.com/caches/2d2bd038d43e773a454cbb4ae76768fb/aHR0cDovL3d3dy5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMTIvNTIwYzI5NDcwZjIwNmUxNjQwZDhhZTNkNjdlYTNhZjktMjIweDY2LnBuZw_p_p100_p_3D_p_p100_p_3D.png','http://static.qifeiye.com/caches/2d2bd038d43e773a454cbb4ae76768fb/aHR0cDovL3d3dy5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMTIvZTI3N2RjNmI2NmZhZjQ2OTZlMGNiMTgwNjlmZjMxZWQtMjIweDY2LnBuZw_p_p100_p_3D_p_p100_p_3D.png','http://static.qifeiye.com/caches/2d2bd038d43e773a454cbb4ae76768fb/aHR0cDovL3d3dy5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMTIvY2E1ZmEzYjYxMTU1ZDZkYmRmZjc1YjQ1OTE2ZDBlZmItMjIweDY2LnBuZw_p_p100_p_3D_p_p100_p_3D.png','http://static.qifeiye.com/caches/2d2bd038d43e773a454cbb4ae76768fb/aHR0cDovL3d3dy5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMTIvZGJlOWIyYjQxMTAzMDJlMzNiMDExYTZlMjhhZmZmNDgtMjIweDY2LnBuZw_p_p100_p_3D_p_p100_p_3D.png'],
                fir_part:['贝宝合作伙伴','阿里云金牌合作伙伴','中国电信指定供应商','亚马逊合作伙伴'],
                fir_engName:['PayPal','aliyun','China telecom','amazon']
               }

        }
    }
    render() {
        return (
        <div className="sy_friend">
            <div className="sy_friendSm">
                <h2>合作伙伴</h2>
                <ul>
                    {
                        this.state.jsonFri.fri_img.map(function (arr,i) {
                            return <li>
                                <img src={arr} alt=""/>
                                <span>{this.state.jsonFri.fir_part[i]}</span>
                                <b>{this.state.jsonFri.fir_engName[i]}</b>
                            </li>
                        }.bind(this))

                    }
                </ul>
            </div>


        </div>
        )
    }
}
class Sy_query extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="sy_query">
                <div className="sy_querySm">
                    <h2>我们提供的不仅仅是工具</h2>
                    <em></em>
                    <span>起飞页不仅是一个方便快捷的构建网站的自助建站平台，更重要的是，我们为中国用户提供了更多贴心的服务：网站备案、自动备份、快速恢复以及网站代建服务。 我们使用了国内、香港和海外最好的网络和云服务器，以确保您的网站能够快速完美地呈现在世界各地的访客面前。</span>

                    <div>                    <img src="http://static.qifeiye.com/caches/2d2bd038d43e773a454cbb4ae76768fb/aHR0cDovL3d3dy5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMTIvZjMxN2YzZmIyZWRhYTU3MGZhNDE5YTQ1OGY2OTM2ZjYtMTAyNHg1NTQucG5n.png" alt=""/></div>


                </div>


            </div>
        )
    }
}
export default Sy;
