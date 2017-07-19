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
            let dl=document.createElement('dl');
            let dt=document.createElement('dt');
            let dd=document.createElement('dd');
            let img=document.createElement('img');
            dl.style.width='291px';
            dl.style.height='170px';
            dl.style.border='1px solid #cccccc';
            dl.style.boxSizing='border-box';
            dl.style.float='left';
            dl.style.margin='21px';
            dl.style.padding='30px';
            dl.style.transition='0.8s';
            dl.style.cursor='pointer';
            img.src=pic[i];
            dd.innerHTML=title[i];
            dd.style.fontFamily='微软雅黑';
            dd.style.color='rgb(73, 73, 73)';
            dd.style.fontSize='15px';
            dd.style.fontWeight='700';
            dd.style.textAlign='center';
            dd.style.wordWrap='break-word';
            dt.style.margin='0 auto';
            dt.style.width='90px';
            dt.style.height='90px';
            dt.appendChild(img);
            dl.appendChild(dt);
            dl.appendChild(dd);
            bottom.appendChild(dl);
            dl.onmouseover=()=> {
                let pic=['http://static.qifeiye.com/caches/2d2bd038d43e773a454cbb4ae76768fb/aHR0cDovL3d3dy5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMTIvODBmZTYzMGZjMjExZTcyY2Y4Y2E5MDMwODc4OTQ4ZTktODJ4NzAucG5n.png'
                    ,'http://static.qifeiye.com/caches/2d2bd038d43e773a454cbb4ae76768fb/aHR0cDovL3d3dy5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMTIvMWY1ZjcxOWU0YzZlODM5NWEwZmE3YTFkMTk1M2VkMGEtODJ4NzAucG5n.png'
                    ,'http://static.qifeiye.com/caches/2d2bd038d43e773a454cbb4ae76768fb/aHR0cDovL3d3dy5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMTIvNDJjZWIyNGQ2MmFlYTdhZmU0N2ZjMTczMDI1ZTA2MGUtODJ4NzAucG5n.png'
                    ,'http://static.qifeiye.com/caches/2d2bd038d43e773a454cbb4ae76768fb/aHR0cDovL3d3dy5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMTIvMTQ2Y2Q3MjA1ZDk2Yzk1ZmUyYmUzYmUyMzA3NGI0MTUtODJ4NzAucG5n.png'
                    ,'http://static.qifeiye.com/caches/2d2bd038d43e773a454cbb4ae76768fb/aHR0cDovL3d3dy5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMTIvYzAyZWE4ZjQ0YTQ1MmQ1N2RlN2Y5YzQ1YzEwMzcwNDQtODJ4NzAucG5n.png'
                    ,'http://static.qifeiye.com/caches/2d2bd038d43e773a454cbb4ae76768fb/aHR0cDovL3d3dy5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMTIvOGJiODg2NjEwMzc5MGEwNWEyYmU4YWEzYTQzNjBkYzktODJ4NzAucG5n.png'];
                dl.style.width='291px';
                dl.style.height='170px';
                dl.style.border='1px solid #0088c2';
                dl.style.boxSizing='border-box';
                dl.style.float='left';
                dl.style.margin='21px';
                dl.style.padding='30px';
                dl.style.background='white';
                img.src=pic[i];
            };
            dl.onmouseout=()=> {
                let pic=['http://static.qifeiye.com/caches/2d2bd038d43e773a454cbb4ae76768fb/aHR0cDovL3d3dy5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMTIvZGE5YWMyYTdkNTM4OTc0M2YyNmFhMzk2YjgxMmUxMTctODJ4NzAucG5n.png'
                    ,'http://static.qifeiye.com/caches/2d2bd038d43e773a454cbb4ae76768fb/aHR0cDovL3d3dy5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMTIvYmNhMDIwYzZmMDNjOWRkYmNlOTEyODk3MmFmYmZjYTYtODJ4NzAucG5n.png'
                    ,'http://static.qifeiye.com/caches/2d2bd038d43e773a454cbb4ae76768fb/aHR0cDovL3d3dy5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMTIvMDUwMDZiYjM5NWYzNzVmN2JmNDRjYWIyNTNkN2JmMDYtODJ4NzAucG5n.png'
                    ,'http://static.qifeiye.com/caches/2d2bd038d43e773a454cbb4ae76768fb/aHR0cDovL3d3dy5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMTIvMmE3Yzk5NTE4ZDAyZWQ1N2U3ZWJkYjliMDY2ZjVhOGQtODJ4NzAucG5n.png'
                    ,'http://static.qifeiye.com/caches/2d2bd038d43e773a454cbb4ae76768fb/aHR0cDovL3d3dy5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMTIvMmFiYjY1ZjczYmQ2YmVhODNiZGQ3MTY4NTNlMmE4NGYtODJ4NzAucG5n.png'
                    ,'http://static.qifeiye.com/caches/2d2bd038d43e773a454cbb4ae76768fb/aHR0cDovL3d3dy5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMTIvM2RhYzY0OWU0NDQxMzYyZDljYzUyZmU2Yzc2NDFiMGItODJ4NzAucG5n.png'];
                dl.style.width='291px';
                dl.style.height='170px';
                dl.style.border='1px solid #cccccc';
                dl.style.boxSizing='border-box';
                dl.style.float='left';
                dl.style.margin='21px';
                dl.style.padding='30px';
                dl.style.background='';
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