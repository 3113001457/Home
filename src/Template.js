import React from 'react'
//ajax 分装
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
                /*opt.error()*/
            }
        }
    };
    function JsonToString(json){
        var arr = [];
        for(var i in json){
            arr.push(i+'='+json[i])
        }
        return arr.join('&');
    }
}
//中间内容组件
class D_sidebar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            sidebarword:[], //设置初始一级下拉内容
            containlist:[], //设置初始二级下拉内容
            index:-1, // 设置样式
            allcon:[], // 设置初始内容
            seindex:-1,
            searchlist:[]//设置搜索框提示
        };
        //点击搜索提示内容
        this.changelist=function (e) {
            this.refs.searchVal.value=e.target.innerHTML
        };
        //输入搜索内容提示
        this.searchlist=function (e) {
            Ajax({
                url:"http://47.92.37.168:8282/search/search",
                type:"get",
                data:{
                    keys:e.target.value, //总数据传keys
                    start:0,
                    end:6 //截取数据数量
                },
                success:function (da) {
                    var date=eval("("+da+")");
                    this.setState({searchlist:date});
                }.bind(this)
            });
        }.bind(this);
        //点击获取数据库二级下拉
        this.click=function (i) {
            this.setState({index:i-1});
            this.setState({seindex:-1});

            var n=1;
            Ajax({
                url:"http://47.92.37.168:8282/sec/sec",
                type:"get",
                data:{
                    oid:i //向二级内容传oid
                },
                success:function (da) {
                    var date=eval("("+da+")");
                    this.setState({containlist:date});
                }.bind(this)
            });
            // 一级导航点击更换数据
            Ajax({
                url:"http://47.92.37.168:8282/first/first",
                type:"get",
                data:{
                    oid:i,  //总数据传oid
                    start:0,
                    end:6//截取数据数量
                },
                success:function (da) {
                    var date=eval("("+da+")");
                    this.setState({allcon:date});
                }.bind(this)
            });
            window.onscroll=function () {
                var ScrolHeight=document.body.scrollHeight;
                var nowTop=document.body.scrollTop;
                var ContainTop=document.documentElement.clientHeight;
                if(parseInt(nowTop+ContainTop)>=ScrolHeight-400){
                    n++;
                    if(n<=60){
                        this.refs.loading.style.display="block";
                        Ajax({
                            url:"http://47.92.37.168:8282/first/first",
                            type:"get",
                            data:{
                                oid:i,  //总数据传oid
                                start:0,
                                end:n*2//截取数据数量
                            },
                            success:function (da) {
                                var date=eval("("+da+")");
                                this.setState({allcon:date});
                                this.refs.loading.style.display="none";
                            }.bind(this)
                        })
                    }

                }
            }.bind(this)
        }.bind(this);
        //点击搜索
        this.search=function () {
            var searchWord=this.refs.searchVal.value;
            this.setState({seindex:-1});
            var n=1;
            Ajax({
                url:"http://47.92.37.168:8282/search/search",
                type:"get",
                data:{
                    keys:searchWord, //总数据传keys
                    start:0,
                    end:6 //截取数据数量
                },
                success:function (da) {
                    var date=eval("("+da+")");
                    this.setState({allcon:date});
                }.bind(this)
            });
            window.onscroll=function () {
                var ScrolHeight=document.body.scrollHeight;
                var nowTop=document.body.scrollTop;
                var ContainTop=document.documentElement.clientHeight;
                if(parseInt(nowTop+ContainTop)>=ScrolHeight-400){

                    n++;
                    if(n<=60){
                        this.refs.loading.style.display="block";
                        Ajax({
                            url:"http://47.92.37.168:8282/search/search",
                            type:"get",
                            data:{
                                keys:searchWord, //总数据传keys
                                start:0,
                                end:n*2 //截取数据数量
                            },
                            success:function (da) {
                                this.setState({index:-1});
                                var date=eval("("+da+")");
                                this.setState({allcon:date});
                                this.refs.loading.style.display="none";
                            }.bind(this)
                        })
                    }

                }
            }.bind(this)
        }.bind(this);
        this.SecClick=function (k,i) {
            this.setState({seindex:k});
            var n=1;
            Ajax({
                url:"http://47.92.37.168:8282/search/search",
                type:"get",
                data:{
                    keys:i.slice(0,2), //总数据传keys
                    start:0,
                    end:6 //截取数据数量
                },
                success:function (da) {
                    var date=eval("("+da+")");
                    this.setState({allcon:date});
                }.bind(this)
            });
            window.onscroll=function () {
                var ScrolHeight=document.body.scrollHeight;
                var nowTop=document.body.scrollTop;
                var ContainTop=document.documentElement.clientHeight;
                if(parseInt(nowTop+ContainTop)>=ScrolHeight-400){

                    n++;
                    if(n<=60){
                        this.refs.loading.style.display="block";
                        Ajax({
                            url:"http://47.92.37.168:8282/search/search",
                            type:"get",
                            data:{
                                keys:i.slice(0,2), //总数据传keys
                                start:0,
                                end:n*2 //截取数据数量
                            },
                            success:function (da) {
                                this.setState({index:-1});
                                var date=eval("("+da+")");
                                this.setState({allcon:date});
                                this.refs.loading.style.display="none";
                            }.bind(this)
                        })
                    }

                }
            }.bind(this)
        }.bind(this)
    }
    componentDidMount(){
        //获取一级下拉内容
        Ajax({
            url:"http://47.92.37.168:8282/login/lo",
            type:"get",
            success:function (da) {
                var date=eval("("+da+")");
                this.setState({sidebarword:date});
            }.bind(this)
        });
        //获取所有数据
        Ajax({
            url:"http://47.92.37.168:8282/all/all",
            type:"get",
            data:{
                start:0,
                end:6 //截取数据数量
            },
            success:function (da) {
                var date=eval("("+da+")");
                this.setState({allcon:date});
            }.bind(this)
        });
        var n=1;
        window.onscroll=function () {
            var ScrolHeight=document.body.scrollHeight;
            var nowTop=document.body.scrollTop;
            var ContainTop=document.documentElement.clientHeight;
            if(parseInt(nowTop+ContainTop)>=ScrolHeight-400){
                /*console.log(this.state.allcon);*/
                n++;
                if(n<=60){
                    if(this.refs.loading==undefined){
                        return false;
                    }else{
                        this.refs.loading.style.display="block";
                    }
                    Ajax({
                        url:"http://47.92.37.168:8282/all/all",
                        type:"get",
                        data:{
                            start:0,
                            end:n*2 //截取数据数量
                        },
                        success:function (da) {
                            var date=eval("("+da+")");
                            this.setState({allcon:date});
                            this.refs.loading.style.display="none"
                        }.bind(this)
                    });
                }
            }
        }.bind(this)
    }
    render(){
        return <div >
            <div className="D_container">
                <div className="D_search">
                    <input type="text" placeholder="搜索模版" ref="searchVal" onKeyUp={this.searchlist.bind(this)}/>
                    <span className="glyphicon glyphicon-search" onClick={this.search.bind(this)} ></span>
                    <ul ref="search_list" className="D_searchlist">
                        {this.state.searchlist.map(function (i,k) {
                            return <li key={k} onClick={this.changelist.bind(this)}>
                                    {i.name}
                            </li>
                               
                        }.bind(this))}
                        
                    </ul>
                </div>
                <ul className="D_sidelist" >
                    {this.state.sidebarword.map(function (i,k) {
                        return <li key={k} name={i.uid} onClick={this.click.bind(null,i.uid)} className={this.state.index==k?"D_stychange":"D_stychange_b"}>{i.name}</li>
                    }.bind(this))}
                </ul>
            </div>
            <div className="D_project">
                 <ul className="D_pro_list">
                     {this.state.containlist.map(function (i,k) {
                         return <li key={k} name={i.uid}  onClick={this.SecClick.bind(null,k,i.name)} className={this.state.seindex==k?"D_selist":"D_selist_b"}>{i.name}</li>
                     }.bind(this))}
                 </ul>
                <div className="clrarly"></div>
                  <ul className="D_allcon">
                      {this.state.allcon.map(function (i,k) {
                          return <li key={k} src={i.url}>
                              <img src={i.image} alt=""/>
                               <div>
                                   <p className="D_conTit">{i.name}</p>
                                   <p className="D_conhref"><button><a href={'http://'+i.url+''} target="_blank">预览</a></button></p>
                               </div>
                               <div className="shadow"></div>
                              <div className="shadow_f"></div>
                          </li>
                      }.bind(this))}
                      <div className="clrarly"></div>
                  </ul>
                <img src={require("./images/loading.gif")} alt="加载图片" ref="loading" className="D_loading"/>
            </div>
            <div className="clrarly"></div>
        </div>
    }
}

//头部组件
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

// template总父组件
class Template extends React.Component{
    render(){
        return <div className="D_wrap">
            <D_titleWord/>
            <D_sidebar/>
        </div>
    }
}
export default Template;