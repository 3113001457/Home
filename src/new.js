import React, {Component} from 'react'

class New extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Json: false,
            newNum: 0
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
                    } else {
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
            type: 'post',
            data: {},
            url: 'http://47.92.37.168:8585/users/list',
            success: function (da) {
                var Json = JSON.parse(da);
                this.setState({
                    Json: Json,
                });
                console.log(this.state.Json.name[0])
            }.bind(this)
        });
    }

    componentDidUpdate() {
        var sy_newDiv = document.getElementsByClassName('sy_newDiv');
        for (var i = 0; i < sy_newDiv.length; i++) {
            sy_newDiv[i].innerHTML = this.state.Json.name[i].cont
        }
    }

    handleClick(i) {
        this.setState({
            newNum: i
        });
        this.refs.sy_touch.style.width = '94.5' + 'vw';
        this.refs.sy_touch.style.height = '89' + 'vh';
        this.refs.divNode.innerHTML = this.state.Json.name[i].cont
    }

    closeClick() {
        this.refs.sy_touch.style.width = '0' + 'vw';
        this.refs.sy_touch.style.height = '0' + 'vh';
    }

    render() {
        if (this.state.Json) {
            return (
                <div id="sy_New">

                        <ul>
                            {
                                this.state.Json.name.map((arr, i)=> {
                                    return (
                                        <li key={i}>
                                            <h1>
                                                {this.state.Json.name[i].name}
                                            </h1>
                                            <h2>{this.state.Json.name[i].faburen}</h2>
                                            <b>
                                                {this.state.Json.name[i].tiemd.slice(0, 10)}
                                            </b>
                                            <div className="sy_newDiv">

                                            </div>
                                            <a onClick={()=>this.handleClick(i)}>DETAILS>></a>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                        <div className="sy_touch" ref="sy_touch">
                            <p className="glyphicon glyphicon-remove sy_touClo" ref='close' onClick={()=>this.closeClick()}></p>
                            <h1>{this.state.Json.name[this.state.newNum].name}</h1>
                            <span>{this.state.Json.name[this.state.newNum].faburen}</span>
                            <div ref='divNode'></div>
                            <b>{this.state.Json.name[this.state.newNum].tiemd.slice(0, 10)}</b>

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
export default New;