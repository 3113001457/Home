import React,{Component} from 'react'
import './Meal.css'
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
class Company_introduction extends Component{
	constructor(props){
		super(props);
		this.state={data:false}
	}
	componentDidMount(){
		Ajax({
			url:"http://47.92.37.168:8282/wabout/about",
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
	}
	render(){
        if(this.state.data){
             return (
                <div className="wjt_abo">
                    <div className="wjt_abo_abo">
                        <h2>{this.state.data[0].title}</h2>
                        <p>{this.state.data[1].title}</p>
                        <p>{this.state.data[2].title}</p>
                        <h3>{this.state.data[3].title}</h3>
                        <div>{this.state.data[4].title}</div>
                        <h3>{this.state.data[5].title}</h3>
                        <div>{this.state.data[6].title}</div>
                        <h3>{this.state.data[7].title}</h3>
                        <div>{this.state.data[8].title}</div>
                        <h3>{this.state.data[9].title}</h3>
                         <div>{this.state.data[10].title}</div>
                    </div>
                </div>
            )
        }else{
                return <div>
                </div>
            }
    }

}
export default Company_introduction;
