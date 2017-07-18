/**
 * Created by Administrator on 2017/7/17.
 */
import React, {Component} from 'react';

class Sy extends Component {
    constructor(props){
        super(props);
        this.state={
            "con":[
                "我们尝试使用起飞页系统做了大概20个网站。目前为止，起飞页是我们使用过的功能较为完善的一个响应式自助建站系统，基本上可以满足我的企业客户的不同建站需求。有的时候，周末发给客服的问题，也能得到即时的回答，对我们这种帮助客户做网站的公司来说，后期服务是最重要的。",
                "如果和WIX, Weebly或者Squarespace进行比较，我觉得起飞页更像是一个综合体。它和Squarespace一样能做出很多华丽的效果，又像weebly一样能很快的搭建博客，又和wix一样容易上手，而且还是响应式的。总之，起飞页是一个很适合我的平台。",
                "选用起飞页一是因为他们就在我们隔壁，二是他们的价格确实很吸引人。在试用了3个月后，我们果断的购买了5年的套餐。起飞页不仅提供了一个美观大方的网站，也提供了稳定的后期服务。我们不断的在为客户介绍起飞页。"
            ],
            "tit":["U-Share – 台湾知名建站公司","北欧维森商旅","苏州金蝶软件"]
        }
    }
    render() {
        return (
            <div className="Sy">
                <Sy_Contain data={this.state}/>
            </div>
        )
    }
}
class Sy_Contain extends Component {
    render() {
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
                                <span>{this.props.data.con[0]}</span>
                                <b>{this.props.data.tit[0]}</b>
                            </p>
                        </div>
                        <div className="item sy_item">
                            <span></span>
                            <p>
                                <span>{this.props.data.con[1]}</span>
                                <b>{this.props.data.tit[1]}</b>
                            </p>
                        </div>
                        <div className="item sy_item">
                            <span></span>
                            <p>
                                <span>{this.props.data.con[2]}</span>
                                <b>{this.props.data.tit[2]}</b>
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

export default Sy;