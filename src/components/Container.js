import React, { Component } from 'react';
import classNames from 'classnames'
import './../assets/container.scss'

export default class Container extends Component {
    render () {
        const dataList = [
            {
                title:'1111',
                content:'lorem111'
            },
            {
                title:'2222',
                content:'lorem222'
            },
            {
                title:'3333',
                content:'lorem333'
            },
            {
                title:'4444',
                content:'lorem444'
            },
            {
                title:'5555',
                content:'lorem555'
            },
            {
                title:'6666',
                content:'lorem666'
            }
        ]
        return (
            <div className="wraper">
                <div className="trangle">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div className="descripion">My webSite</div>
                    <div className="name">JIN LIN</div>
                </div>
                <div className="trangle two">
                    <div>
                        <div className="rotate225 rotateOne">
                        -webkit-transform: translate3d(0, -100%, 0);
                        transform: translate3d(0, -100%, 0);
                        </div>
                    </div>
                    <div>
                        <div className="rotate225">
                        
                        </div>
                    </div>
                    <div>
                        <div className="rotate225">
                        -webkit-transform: translate3d(0, -100%, 0);
                        transform: translate3d(0, -100%, 0);
                        </div>
                    </div>
                    <div></div>
                </div>
                <div className="shape"></div>
                <div className="wrapGrey_one">
                    <div className="greyTrangle">
                        <div className="backToPos">
                            {dataList.map((data,index)=>{
                                return (
                                <div key={data.title}  className={'whiteBlock ' + classNames({left:index%2===0, right:index%2!==0})}>
                                    <div>{data.title}</div>
                                    <div>{data.content}</div>
                                    <div>{index}</div>
                                </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div className="wrapCircle">
                    <div className="circle"></div>
                </div>
            </div>
        )
    }
}