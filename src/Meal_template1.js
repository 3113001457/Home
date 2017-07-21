import React,{Component} from 'react'
class MealtemplateFirst extends Component{
	render(){
        return(
            <div className="wjt_banner">
                <div className="wjt_banner_color">
                    <div className="wjt_banerCon">
                        <div className="wjt_firsttext">
                            免费使用所有模板，只需支付托管费用
                        </div>
                        <div className="wjt_sendtext">敢为人先，起飞页支持用户网站30天无理由退款政策！</div>
                    </div>
                    <div className="wjt_bannerul">
                    <ul>
                        <li><a href="">托管套餐</a></li>
                        <li><a href="">代理服务</a></li>
                        <li><a href="">定制服务</a></li>
                        <li className="wjt_borhide"><a href="">常见问题</a></li>
                    </ul>
                    </div>  
                </div>  
           </div>
        )
    }
}
export default MealtemplateFirst;