/**
 * Created by dell on 2017/7/27.
 */
import React, { Component } from 'react'

class Sidebar extends Component{
    render(){
        return <ul className="D_sidebarWrap">
            <li>
                <a href="http://wpa.qq.com/msgrd?v=3&uin=800088546&site=qq&menu=yes">
                    <p></p>
                    <div>联系客服</div>
                </a>
            </li>
            <li>
                <a href="tel:4006285729">
                    <p></p>
                    <div>400888888</div>
                </a>
            </li>
            <li>
                <a>
                    <p></p>
                    <div></div>
                </a>
            </li>
        </ul>
    }
}
export default Sidebar;