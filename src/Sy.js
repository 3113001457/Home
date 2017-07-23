/**
 * Created by Administrator on 2017/7/17.
 */
import React, {Component} from 'react';
/*父组件*/
class Sy extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount(){
         var sy_fre_h2=document.getElementById('sy_fre_h2');
         var sy_wrap_h2=document.getElementById('sy_wrap_h2');
         var sy_wrap_h3=document.getElementById('sy_wrap_h3');
         var sy_que_h2=document.getElementById('sy_que_h2');
         var sy_que_em=document.getElementById('sy_que_em');
         var sy_que_span=document.getElementById('sy_que_span');
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
            if(scrollTop+window.screen.height>=sy_fre_h2.offsetTop+200&&scrollTop+window.screen.height<sy_fre_h2.offsetTop+500){
                sy_fre_h2.style.transform='scale(1)';
            }
            if(scrollTop+window.screen.height>=sy_que_h2.offsetTop+200&&scrollTop+window.screen.height<sy_que_h2.offsetTop+500){
                sy_que_h2.style.opacity='1';
                sy_que_em.style.opacity='1';
                sy_que_span.style.opacity='1';
            }
            if(scrollTop+window.screen.height>=sy_wrap_h2.offsetTop+200&&scrollTop+window.screen.height<sy_wrap_h2.offsetTop+500){
                sy_wrap_h2.style.opacity='1';
                sy_wrap_h3.style.opacity='1';
            }
        });
    }
    render() {
        return (
            <div className="Sy">
                <Sy_wrap />
                <Sy_query />
                <Sy_friend />
                <Sy_Contain />
            </div>
        )
    }
}
/*SY-最下面轮播 */
class Sy_Contain extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Json: false
        }
    }
    componentDidMount() {
        function Ajax(opt) {
            if (window.XMLHttpRequest) {
                var xhr = new XMLHttpRequest();
            }
            else {
                var xhr = new window.ActiveXObject("Microsoft.XMLHTTP");
            }
            if (opt.type == 'get') {
                xhr.open(opt.type, opt.url + '?' + JsonToString(opt.data), true);
                xhr.send();
            }
            else if (opt.type == 'post') {
                xhr.open(opt.type, opt.url, true);
                xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                xhr.send(JsonToString(opt.data));
            }
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    if (xhr.status >= 200 && xhr.status < 300 || xhr.status == 304) {
                        opt.success(xhr.responseText);
                    }else {
                        // opt.error()
                    }
                }
            };
            function JsonToString(json) {
                var arr = [];
                for (var i in json) {
                    arr.push(i + '=' + json[i])
                }
                return arr.join('&');
            };
        };
        Ajax({
            type: 'get',
            data: {},
            url: 'http://localhost:8282/demod/demo',
            success: function (da) {
                var Json = JSON.parse(da);
                this.setState({
                    Json: Json,
                });
            }.bind(this)
        });
    }
    componentDidUpdate(){
        var sy_Con_h2=document.getElementById('sy_Con_h2');
        var sy_Con=document.getElementById('sy_Con');
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
            if(scrollTop+window.screen.height>=sy_Con.offsetTop+200&&scrollTop+window.screen.height< sy_Con.offsetTop+500){
                sy_Con_h2.style.transform='scale(1)';
            }
        });
    }
    render() {
        if (this.state.Json) {
            return (
                <div className="sy_Con" id="sy_Con">
                    <div className="sy_Con_tit">
                        <h2 ref="sy_Con_h2" id="sy_Con_h2">客户反馈</h2>
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
                            <a className="left sy_btnLeftCon" href="#myCarousel"
                               data-slide="prev">
                            </a>
                            <a className="right sy_btnRightCon" href="#myCarousel"
                               data-slide="next">
                            </a>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div></div>
            )
        }
    }
}
/*SY-合作伙伴 */
class Sy_friend extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jsonFri: {
                fri_img: ['http://static.qifeiye.com/caches/2d2bd038d43e773a454cbb4ae76768fb/aHR0cDovL3d3dy5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMTIvNTIwYzI5NDcwZjIwNmUxNjQwZDhhZTNkNjdlYTNhZjktMjIweDY2LnBuZw_p_p100_p_3D_p_p100_p_3D.png', 'http://static.qifeiye.com/caches/2d2bd038d43e773a454cbb4ae76768fb/aHR0cDovL3d3dy5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMTIvZTI3N2RjNmI2NmZhZjQ2OTZlMGNiMTgwNjlmZjMxZWQtMjIweDY2LnBuZw_p_p100_p_3D_p_p100_p_3D.png', 'http://static.qifeiye.com/caches/2d2bd038d43e773a454cbb4ae76768fb/aHR0cDovL3d3dy5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMTIvY2E1ZmEzYjYxMTU1ZDZkYmRmZjc1YjQ1OTE2ZDBlZmItMjIweDY2LnBuZw_p_p100_p_3D_p_p100_p_3D.png', 'http://static.qifeiye.com/caches/2d2bd038d43e773a454cbb4ae76768fb/aHR0cDovL3d3dy5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMTIvZGJlOWIyYjQxMTAzMDJlMzNiMDExYTZlMjhhZmZmNDgtMjIweDY2LnBuZw_p_p100_p_3D_p_p100_p_3D.png'],
                fir_part: ['贝宝合作伙伴', '阿里云金牌合作伙伴', '中国电信指定供应商', '亚马逊合作伙伴'],
                fir_engName: ['PayPal', 'aliyun', 'China telecom', 'amazon']
            }
        }
    }
    render() {
        return (
            <div className="sy_friend">
                <div className="sy_friendSm">
                    <h2 id="sy_fre_h2">合作伙伴</h2>
                    <ul>
                        {
                            this.state.jsonFri.fri_img.map(function (arr, i) {
                                return <li key={arr}>
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
/*SY-背景banner */
class Sy_query extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="sy_query">
                <div className="sy_querySm">
                    <h2 id="sy_que_h2">我们提供的不仅仅是工具</h2>
                    <em id="sy_que_em"></em>
                    <span id="sy_que_span">起飞页不仅是一个方便快捷的构建网站的自助建站平台，更重要的是，我们为中国用户提供了更多贴心的服务：网站备案、自动备份、快速恢复以及网站代建服务。 我们使用了国内、香港和海外最好的网络和云服务器，以确保您的网站能够快速完美地呈现在世界各地的访客面前。</span>
                    <div><img
                        src="http://static.qifeiye.com/caches/2d2bd038d43e773a454cbb4ae76768fb/aHR0cDovL3d3dy5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMTIvZjMxN2YzZmIyZWRhYTU3MGZhNDE5YTQ1OGY2OTM2ZjYtMTAyNHg1NTQucG5n.png"
                        alt=""/></div>
                </div>
            </div>
        )
    }
}
/*SY-第一个轮播 */
class Sy_wrap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            wrap_img: [
                'http://static.qifeiye.com/caches/2d2bd038d43e773a454cbb4ae76768fb/aHR0cDovL3d3dy5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMTIvMjQ3YzNhNzYyODRlMGQ5YjUyMzFkYzRkMThhOGY0ZDEucG5n.png',
                'http://static.qifeiye.com/caches/2d2bd038d43e773a454cbb4ae76768fb/aHR0cDovL3d3dy5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMTIvMGQ2MDM5OTExZWFmZjAwNDE2ZWE0ZTU3ZWUxMmI5NzkucG5n.png',
                'http://static.qifeiye.com/caches/2d2bd038d43e773a454cbb4ae76768fb/aHR0cDovL3d3dy5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMTIvM2ZiNzg4OTgxZTI0NWFkZDM3ZTM4Zjg4NzZlNDU4ODgucG5n.png',
                'http://static.qifeiye.com/caches/2d2bd038d43e773a454cbb4ae76768fb/aHR0cDovL3d3dy5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMTIvZDkxODg1Y2RmMDVhYWZlOTZjYWJlM2FjNWMxY2NiMTcucG5n.png',
                'http://static.qifeiye.com/caches/2d2bd038d43e773a454cbb4ae76768fb/aHR0cDovL3d3dy5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMTIvZTc0NjA3YTA3ZmRiNzRmNjYzOTMyNjc5MjkxZjEyYjIucG5n.png',
                'http://static.qifeiye.com/caches/2d2bd038d43e773a454cbb4ae76768fb/aHR0cDovL3d3dy5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMTIvOTA4ZThhOTI0NzQ5ZmJlOGMyMDViMDhmMmRhYTE0YWMucG5n.png',
                'http://static.qifeiye.com/caches/2d2bd038d43e773a454cbb4ae76768fb/aHR0cDovL3d3dy5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMTIvZjRlZDNlYTFhNGE1Y2JhYTE5MGI0MTY4OWI3Y2FlMGEucG5n.png'
            ],
            wrap_num: 0,
            wrap_boo: true,
            wrap_time: null,
            wrap_timeTw: null,
            wrap_fun: null
        }
    }
    componentDidMount() {
        var sy_wrap_ul = document.getElementById('sy_wrap_ul');
        this.state.wrap_fun = function () {
            if (this.state.wrap_num > 3) {
                this.state.wrap_num = 0;
            }
            this.setState={
                wrap_num: ++this.state.wrap_num
            };
            clearInterval(this.state.wrap_time);
            this.state.wrap_time = setTimeout(function () {
                this.state.wrap_boo = true;
            }.bind(this), 700);
            sy_wrap_ul.style.left = -this.state.wrap_num * 4.44 + 'rem';
        }.bind(this);
        clearInterval(this.state.wrap_timeTw);
        this.state.wrap_timeTw = setInterval(function () {
            this.state.wrap_fun()
        }.bind(this), 3000)

    }
    handleClickRight(){
        if(this.state.wrap_boo==true) {
            this.state.wrap_boo = false;
            if (this.state.wrap_num > 3) {
                this.state.wrap_num = 0;
            } else {
                this.setState={
                    wrap_num: ++this.state.wrap_num
                };
            }
            clearInterval(this.state.wrap_time);
            this.state.wrap_time = setTimeout(function () {
                this.state.wrap_boo=true;
            }.bind(this),700);
            this.refs.aa.style.left = -this.state.wrap_num * 4.45 + 'rem';
        }
    }
    handleClickLeft(){
        if(this.state.wrap_boo==true) {
            this.state.wrap_boo = false;
            if (this.state.wrap_num <= 0) {
                this.state.wrap_num = 4;
                clearInterval(this.state.wrap_time);
                this.state.wrap_time = setTimeout(function () {
                    this.state.wrap_boo=true;
                }.bind(this),700);
            } else {
                this.setState={
                    wrap_num: --this.state.wrap_num
                };
                clearInterval(this.state.wrap_time);
                this.state.wrap_time = setTimeout(function () {
                    this.state.wrap_boo=true;
                }.bind(this),700);
            }
            this.refs.aa.style.left = -this.state.wrap_num * 4.45 + 'rem';
        }
    }
    handleOver(){
        clearInterval(this.state.wrap_timeTw);
    }
    handleOut(){
        var sy_wrap_ul=document.getElementById('sy_wrap_ul');
        clearInterval(this.state.wrap_timeTw);
        this.state.wrap_timeTw = setInterval(function () {
            this.state.wrap_fun()
        }.bind(this), 3000);
    }
    render() {
        return (
            <div className="sy_wrap">
                <div className="sy_wrapSm">
                    <h2 id="sy_wrap_h2">免费海量模板随您挑选</h2>
                    <h3 id="sy_wrap_h3">您可以从众多出色的H5模板中挑选出您最喜欢的</h3>
                    <div onMouseOver={this.handleOver.bind(this)} onMouseOut={this.handleOut.bind(this)}>
                        <span className="glyphicon glyphicon-chevron-left" onClick={this.handleClickLeft.bind(this)} ></span>
                        <span className="glyphicon glyphicon-chevron-right" onClick={this.handleClickRight.bind(this)} ></span>
                        <div>
                            <ul ref='aa' style={{left:'0'}} id="sy_wrap_ul">
                                {
                                    this.state.wrap_img.map(function (arr) {
                                        return (
                                            <li key={arr}>
                                                <a href=""><img src={arr} alt="" /></a>
                                            </li>
                                        )
                                    }.bind(this))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Sy;

