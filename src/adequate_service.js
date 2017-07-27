import React,{Component} from 'react'
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
    }
}
class Adequate_service extends Component{
	constructor(props){
		super(props);
		this.state={data:false,content:false}
	}
	componentDidMount(){
		Ajax({
			url:"http://47.92.37.168:8282/wabout2/about2",
			type:"get",
			success:function(data){
				var date=eval("("+data+")");
                 this.setState({data:date});
                 console.log(this.state.data)
			}.bind(this),
			error:function(about){
				console.log(about)
			}
		})
		Ajax({
			url:"http://47.92.37.168:8282/wabout3/about3",
			type:"get",
			success:function(data){
				var date=eval("("+data+")");
                 this.setState({content:date});
			}.bind(this),
			error:function(about){
				console.log(about)
			}
		})
	}
	render(){
        if(this.state.data&&this.state.content){
             return (<div className="wjt_abo">
             		                    <div className="wjt_abo_abo">
             		                       	<h2>{this.state.data[0].title}</h2>
             		                       	<h3>{this.state.data[1].title}</h3>
             		                       	<p>{this.state.data[2].title}</p>
             		                       	<ul>{this.state.content.map((i,k)=>{
             		                       		return <li>{i.title}</li>
             		                       	})}</ul>
             		                       	<h3>{this.state.data[3].title}</h3>
             		                       	<ul>{this.state.content.map((i,k)=>{
             		                       		if(k<=2){
             		                       			return <li>{i.text}</li>
             		                       		}
             		                       	})}</ul>
             		                       	<h3>{this.state.data[4].title}</h3>
             		                       	<p>{this.state.data[5].title}</p>
             		                       	<ul>{this.state.content.map((i,k)=>{
             		                       		if(k<=2){
             		                       			return <li>{i.content1}</li>
             		                       		}
             		                       	})}</ul>
             		                       	<h3>{this.state.data[6].title}</h3>
             		                       	<p>{this.state.data[7].title}</p>
             		                       	<h3>{this.state.data[8].title}</h3>
             		                       	<p>{this.state.data[9].title}</p>
             		                       	<ul>{this.state.content.map((i,k)=>{
             		                       		if(k<=1){
             		                       			return <li>{i.content2}</li>
             		                       		}
             		                       	})}</ul>
             		                       	<p>{this.state.data[10].title}</p>
             		                       	<h3>{this.state.data[11].title}</h3>
             		                       	<p>{this.state.data[12].title}</p>
             		                    </div>
             		            </div>)
        }else{
            return <div></div>   
        }
    }

}
export default Adequate_service;