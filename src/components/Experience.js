import React from 'react';
import '../assets/experience.scss'
export default class Experience extends React.Component{
    render(){
        return (
            <div>
                in a hurry to finish
                <div className="timeLine">
                    <div className="mainLine"></div>
                    <div className="leftLine"></div>
                    <div className="rightLine"></div>
                </div>
            </div>
        )
    }
}