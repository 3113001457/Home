/**
 * Created by 张亚豪 on 2017/7/13.
 */
import React, { Component } from 'react';
import './zyh.css';
import Main1 from './Main1';
import Main2 from './Main2';
import Main3 from './Main3';
import Main4 from './Main4';
import Banner from './banner';
import Respon from './respon';

class Zyh extends Component {
    componentDidMount(){
        let zyhTextFirst=document.getElementById('zyhTextFirst');
        let zyhTextSecond=document.getElementById('zyhTextSecond');
        let zyhButton=document.getElementById('zyhButton');
        let fast=document.getElementById('fast');
        let technology=document.getElementById('technology');
        let edit=document.getElementById('edit');
        let Firstleft=document.getElementById('Firstleft');
        let Firstright=document.getElementById('Firstright');
        let Secondleft=document.getElementById('Secondleft');
        let Secondright=document.getElementById('Secondright');
        let Thiredleft=document.getElementById('Thiredleft');
        let Thiredright=document.getElementById('Thiredright');
        let Fourthleft=document.getElementById('Fourthleft');
        let Fourthright=document.getElementById('Fourthright');
        let timer=null;
        let timer2=null;
        let num=0;
        let num2=0;
        // setInterval(function () {
        //     zyhSpan.style.opacity='1';
        //     setTimeout(function () {
        //         zyhSpan.style.opacity='0'
        //     },400)
        // },800);
        timer=setInterval(function () {
            zyhTextFirst.style.display='block';
            if(num>=300){
                clearInterval(timer);
            }
            num+=40;
            zyhTextFirst.style.width=num+'px';
        },250);
        setTimeout(function () {
            zyhTextSecond.style.display='block';
            timer2=setInterval(function () {
                if(num2>=320){
                    clearInterval(timer2);
                }
                num2+=40;
                zyhTextSecond.style.width=num2+'px';
            },250);
        },3000);
        function addEvent(obj,type,fn){
            if(obj.attachEvent){
                obj.attachEvent('on'+type,function(){
                    fn.call(obj);
                })
            }else{
                obj.addEventListener(type,fn,false);
            }
        }
        addEvent(window,'scroll',function(){
            let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            num=scrollTop;
            let timer=null;
            zyhButton.onclick= () => {
                timer=setInterval(function () {
                    if(num>=930){
                        clearInterval(timer)
                    }
                    num += 10;
                    document.body.scrollTop = document.documentElement.scrollTop = num;
                },10)
            };
            if(num >= 520) {
                fast.style.opacity = '1';
                fast.style.transition = '1.5s';
                fast.style.marginTop = '0';
                technology.style.opacity = '1';
                technology.style.transition = '1.5s';
                technology.style.marginTop = '30px';
                edit.style.opacity = '1';
                edit.style.transition = '1.5s';
                edit.style.marginTop = '13px';
            }
            if(num>=1640 && num<=1740){
                Firstleft.style.left='0';
                Firstright.style.opacity='1';
            }
            if(num>=1940 && num<=2040){
                Secondright.style.right='0';
                Secondleft.style.opacity='1';
            }
            if(num>=2540 && num<=2640){
                Thiredleft.style.left='0';
                Thiredright.style.opacity='1';
            }
            if(num>=3140 && num<=3240){
                Fourthright.style.right='0';
                Fourthleft.style.opacity='1';
            }
        });
    }
    render() {
        return (
            <div className="Zyh">
                {/*banner*/}
                <div className="zyh-banner">
                    <Banner/>
                </div>
                {/*responsive*/}
                <div className="zyh-responsive">
                    <Respon/>
                </div>
                {/*main*/}
                <div className="zyh-main">
                    <Main1/>
                    <Main2/>
                    <Main3/>
                    <Main4/>
                </div>
            </div>
        );
    }
}
export default Zyh;

// window.onload=function () {
//
// };
