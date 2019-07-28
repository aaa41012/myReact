import React from 'react';
import './../assets/about.scss';
import mountain0 from '../assets/img/mountains/0.png'
import mountain1 from '../assets/img/mountains/1.png'
import mountain2 from '../assets/img/mountains/2.png'
import mountain3 from '../assets/img/mountains/3.png'
import mountain4 from '../assets/img/mountains/4.jpg'

export default class About extends React.Component{
    componentDidMount () {
        console.log('componentDidMount')
        window.addEventListener('scroll', this.handleParallax)
    }
    componentWillUnmount () {
        console.log('componentWillUnmount')
        window.removeEventListener('scroll', this.handleParallax)
    }
    handleParallax () {
        let skyScroll = window.scrollY / 2
        let mountain0Scroll = window.scrollY / 2
        let mountain1Scroll = window.scrollY / 3
        let mountain2Scroll = window.scrollY / 5
        let mountain3Scroll = window.scrollY / 4
        let textScroll = window.scrollY / 2
        document.getElementById('sky').style.webkitTransform=`translate3d(0,${-70+skyScroll}px,0)`
        document.getElementById('mountain0').style.webkitTransform=`translate3d(0,${-650 + mountain0Scroll}px,0)`
        document.getElementById('mountain1').style.webkitTransform=`translate3d(0,${-550 + mountain1Scroll}px,0)`
        document.getElementById('mountain2').style.webkitTransform=`translate3d(0,${-450 + mountain2Scroll}px,0)`
        document.getElementById('mountain3').style.webkitTransform=`translate3d(0,${-410 + mountain3Scroll}px,0)`
        document.getElementById('simpleText').style.webkitTransform=`translate3d(0,${ textScroll}px,0)`
    }
    render(){
        return (
            <div>
                <div className="container">
                    <div id="simpleText">
                        Hello<br/> It`s My Story
                    </div>
                    <div id="sky">
                        <img src={mountain4} alt="sky"/>
                    </div>
                    <div id="mountain0">
                        <img src={mountain0} alt="mountain0"/>
                    </div>
                    <div id="mountain2">
                        <img src={mountain2} alt="mountain2"/>
                    </div>
                    <div id="mountain3">
                        <img src={mountain3} alt="mountain3"/>
                    </div>
                    <div id="mountain1">
                        <img src={mountain1} alt="mountain1"/>
                    </div>
                </div>
                <div>
                    
                </div>
            </div>
        )
    }
}