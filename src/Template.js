import React from 'react'


class D_container extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            sidebarword: [],
            sidebarid:[]
        };
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
            url:"http://localhost:8282/login/lo",
            type:"get",
            success:function (da) {
                var arr=[]
                var date=eval("("+da+")");
                for(var i=0;i<date.length;i++){
                    arr.push(date[i].name)
                }
                this.setState({sidebarword:arr});
                console.log(this.state.sidebarword)
            }.bind(this)
             })
    }
    render(){
        return <div>
            <ul>
                {this.state.sidebarword.map(function (i,k) {
                    return <li key={k}>{i}</li>
                })}
            </ul>
        </div>
    }
}


class D_titleWord extends React.Component{
    render(){
        return <div>
            <div className="D_title">
                <p className="D_temTit">好的心情先从好的模版开始</p>
                <p className="D_tembut">您可以通过关键词快速找到您需要的模版，例如：酒店、软件外包、律师事务所等。</p>
            </div>
        </div>
    }
}
class Template extends React.Component{
    render(){
        return <div className="D_wrap">
            <D_titleWord/>
            <D_container/>
        </div>
    }
}
export default Template;