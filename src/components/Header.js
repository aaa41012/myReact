import React, { Component } from 'react';
import './../assets/header.scss'

export default class Header extends Component {
    render () {
        const listArr = ['Work Experience','Ability', 'About Me']
        return (
            <div className="wrapHead">
                <div>JIN</div>
                <div>
                    <ul className="wrapList">
                        {listArr.map((item)=>{
                            return (<li key={item}>{item}</li>)
                        })}
                    </ul>
                </div>
            </div>
        )
    }
}