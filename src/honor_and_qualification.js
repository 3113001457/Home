import React,{Component} from 'react'
import './zyh.css';

class Honor_and_qualification extends Component{
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
            url: 'http://localhost:8282/honors/honor',
            success:  (da) => {
                let Json = JSON.parse(da);
                // console.log(Json);
                this.setState({
                    Json: Json,
                });
            }
        });
    }
    render(){
        if(this.state.Json){
            return (
                <div>
                    <div className="honor-divO">
                        <p className="honor-p honor-pF">100%自主知识产权</p>
                        <p className="honor-p">江苏高新技术企业</p>
                        <p className="honor-p honor-pF">江苏省双软企业</p>
                        <p className="honor-p">ISO27001认证企业</p>
                        {
                            this.state.Json.map((item, i) => {
                                return <div className="honor-div">
                                    <img className="honor-img" src={this.state.Json[i].img} alt=""/>
                                </div>
                            })
                        }
                    </div>
                </div>
            )
        }else{
            return (
                <div></div>
            )
        }

    }
}
export default Honor_and_qualification;