import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom"
import Home from '../components/Container'
import Experience from '../components/Experience'
import Ability from '../components/Ability'
import About from '../components/About'
import './../assets/header.scss'

export default class Header extends Component {
    render () {
        const listArr = [
            {
                name:'Work Experience',
                url:'experience'
            },
            {
                name:'Ability',
                url:'ability'
            },
            {
                name:'About Me',
                url:'about'
            }
        ]
        return (
            <BrowserRouter>
                <div className="wrapHead">
                    <div>
                        <Link to="/">JIN</Link>
                    </div>
                    <div>
                        <ul className="wrapList">
                            {listArr.map((item)=>{
                                return (<li key={item.name}>
                                <Link to={item.url}>
                                    {item.name}
                                </Link>
                                </li>)
                            })}
                        </ul>
                    </div>
                </div>
                <Route exact path="/" component={Home}/>
                <Route path="/experience" component={Experience}/>
                <Route path="/ability" component={Ability}/>
                <Route path="/about" component={About}/>
            </BrowserRouter>
        )
    }
}