/**
 * Created by 张亚豪 on 2017/7/19.
 */
import React, { Component } from 'react';
import './zyh.css';

class Onesecond extends Component {
    componentDidMount(){
        let bottom=document.getElementById('zyh-onesecondBottom');
        let pic=['http://static.qifeiye.com/caches/2d2bd038d43e773a454cbb4ae76768fb/aHR0cDovL3d3dy5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMTIvZGE5YWMyYTdkNTM4OTc0M2YyNmFhMzk2YjgxMmUxMTctODJ4NzAucG5n.png'
            ,'http://static.qifeiye.com/caches/2d2bd038d43e773a454cbb4ae76768fb/aHR0cDovL3d3dy5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMTIvYmNhMDIwYzZmMDNjOWRkYmNlOTEyODk3MmFmYmZjYTYtODJ4NzAucG5n.png'
            ,'http://static.qifeiye.com/caches/2d2bd038d43e773a454cbb4ae76768fb/aHR0cDovL3d3dy5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMTIvMDUwMDZiYjM5NWYzNzVmN2JmNDRjYWIyNTNkN2JmMDYtODJ4NzAucG5n.png'
            ,'http://static.qifeiye.com/caches/2d2bd038d43e773a454cbb4ae76768fb/aHR0cDovL3d3dy5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMTIvMmE3Yzk5NTE4ZDAyZWQ1N2U3ZWJkYjliMDY2ZjVhOGQtODJ4NzAucG5n.png'
            ,'http://static.qifeiye.com/caches/2d2bd038d43e773a454cbb4ae76768fb/aHR0cDovL3d3dy5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMTIvMmFiYjY1ZjczYmQ2YmVhODNiZGQ3MTY4NTNlMmE4NGYtODJ4NzAucG5n.png'
            ,'http://static.qifeiye.com/caches/2d2bd038d43e773a454cbb4ae76768fb/aHR0cDovL3d3dy5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMTIvM2RhYzY0OWU0NDQxMzYyZDljYzUyZmU2Yzc2NDFiMGItODJ4NzAucG5n.png'];
        let title=['CDN发布','多层缓存','页面压缩','JS/CSS文件合并','DNS云解析','图片无损压缩'];
        for(let i=0;i<6;i++){
            let div=document.createElement('div');
            let p=document.createElement('p');
            let dl=document.createElement('dl');
            let dt=document.createElement('dt');
            let dd=document.createElement('dd');
            let img=document.createElement('img');
            div.style.width='2.91rem';
            div.style.height='1.70rem';
            div.style.float='left';
            div.style.margin='0.21rem';
            div.style.boxSizing='border-box';
            div.style.transition='0s';
            // p.style.width='2.91rem';
            // p.style.height='1.70rem';
            p.style.border='1px solid #cccccc';
            p.style.padding='0.3rem';
            p.style.boxSizing='border-box';
            p.style.transition='0.8s';
            dl.style.transition='0s';
            dl.style.cursor='pointer';
            img.src=pic[i];
            dd.innerHTML=title[i];
            dd.style.fontFamily='微软雅黑';
            dd.style.color='rgb(73, 73, 73)';
            dd.style.fontSize='0.15rem';
            dd.style.fontWeight='700';
            dd.style.textAlign='center';
            dd.style.wordWrap='break-word';
            dt.style.margin='0 auto';
            dt.style.width='0.9rem';
            dt.style.height='0.9rem';
            dt.appendChild(img);
            p.appendChild(dt);
            p.appendChild(dd);
            dl.appendChild(p);
            div.appendChild(dl);
            bottom.appendChild(div);
            div.onmouseover=()=> {
                let pic=['http://static.qifeiye.com/caches/2d2bd038d43e773a454cbb4ae76768fb/aHR0cDovL3d3dy5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMTIvODBmZTYzMGZjMjExZTcyY2Y4Y2E5MDMwODc4OTQ4ZTktODJ4NzAucG5n.png'
                    ,'http://static.qifeiye.com/caches/2d2bd038d43e773a454cbb4ae76768fb/aHR0cDovL3d3dy5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMTIvMWY1ZjcxOWU0YzZlODM5NWEwZmE3YTFkMTk1M2VkMGEtODJ4NzAucG5n.png'
                    ,'http://static.qifeiye.com/caches/2d2bd038d43e773a454cbb4ae76768fb/aHR0cDovL3d3dy5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMTIvNDJjZWIyNGQ2MmFlYTdhZmU0N2ZjMTczMDI1ZTA2MGUtODJ4NzAucG5n.png'
                    ,'http://static.qifeiye.com/caches/2d2bd038d43e773a454cbb4ae76768fb/aHR0cDovL3d3dy5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMTIvMTQ2Y2Q3MjA1ZDk2Yzk1ZmUyYmUzYmUyMzA3NGI0MTUtODJ4NzAucG5n.png'
                    ,'http://static.qifeiye.com/caches/2d2bd038d43e773a454cbb4ae76768fb/aHR0cDovL3d3dy5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMTIvYzAyZWE4ZjQ0YTQ1MmQ1N2RlN2Y5YzQ1YzEwMzcwNDQtODJ4NzAucG5n.png'
                    ,'http://static.qifeiye.com/caches/2d2bd038d43e773a454cbb4ae76768fb/aHR0cDovL3d3dy5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMTIvOGJiODg2NjEwMzc5MGEwNWEyYmU4YWEzYTQzNjBkYzktODJ4NzAucG5n.png'];
                // dl.style.width='2.91rem';
                // dl.style.height='1.7rem';
                p.style.border='1px solid #0088c2';
                p.style.boxSizing='border-box';
                p.style.background='white';
                p.style.padding='0.3rem';
                img.src=pic[i];
            };
            div.onmouseout=()=> {
                let pic=['http://static.qifeiye.com/caches/2d2bd038d43e773a454cbb4ae76768fb/aHR0cDovL3d3dy5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMTIvZGE5YWMyYTdkNTM4OTc0M2YyNmFhMzk2YjgxMmUxMTctODJ4NzAucG5n.png'
                    ,'http://static.qifeiye.com/caches/2d2bd038d43e773a454cbb4ae76768fb/aHR0cDovL3d3dy5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMTIvYmNhMDIwYzZmMDNjOWRkYmNlOTEyODk3MmFmYmZjYTYtODJ4NzAucG5n.png'
                    ,'http://static.qifeiye.com/caches/2d2bd038d43e773a454cbb4ae76768fb/aHR0cDovL3d3dy5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMTIvMDUwMDZiYjM5NWYzNzVmN2JmNDRjYWIyNTNkN2JmMDYtODJ4NzAucG5n.png'
                    ,'http://static.qifeiye.com/caches/2d2bd038d43e773a454cbb4ae76768fb/aHR0cDovL3d3dy5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMTIvMmE3Yzk5NTE4ZDAyZWQ1N2U3ZWJkYjliMDY2ZjVhOGQtODJ4NzAucG5n.png'
                    ,'http://static.qifeiye.com/caches/2d2bd038d43e773a454cbb4ae76768fb/aHR0cDovL3d3dy5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMTIvMmFiYjY1ZjczYmQ2YmVhODNiZGQ3MTY4NTNlMmE4NGYtODJ4NzAucG5n.png'
                    ,'http://static.qifeiye.com/caches/2d2bd038d43e773a454cbb4ae76768fb/aHR0cDovL3d3dy5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMTIvM2RhYzY0OWU0NDQxMzYyZDljYzUyZmU2Yzc2NDFiMGItODJ4NzAucG5n.png'];
                // dl.style.width='2.91rem';
                // dl.style.height='1.7rem';
                p.style.border='1px solid #cccccc';
                p.style.boxSizing='border-box';
                p.style.padding='0.3rem';
                p.style.background='';
                img.src=pic[i];
            }
        }
    }
    render() {
        return (
            <div className="zyh-onesecondIn">
                <div className="zyh-onesecondTop">
                    <p className="zyh-oneTopP zyh-oneTopPFirst">1秒打开<span className="zyh-oneTopPSpan">，</span>快得有点儿狠</p>
                    <p className="zyh-oneTopP zyh-oneTopPSecond">超高性能云服务器和云网络，CPU提速90%，内存提速50%，IO处理提速200%，网速提高100%</p>
                </div>
                <div className="zyh-onesecondBottom" id="zyh-onesecondBottom"></div>
            </div>
        );
    }
}
export default Onesecond;