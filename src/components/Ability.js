import React from 'react';
import html_logo from '../assets/img/html.png'
import css_logo from '../assets/img/css.png'
import js_logo from '../assets/img/js.png'
import vue_logo from '../assets/img/vue.png'
import scss_logo from '../assets/img/sass.png'
import jquery_logo from '../assets/img/jquery.png'
import sorceTree_logo from '../assets/img/sourcetree.png'
import git_logo from '../assets/img/git.png'
// import classNames from 'classnames'
import '../assets/ability.scss'
export default class Ability extends React.Component{
    render(){
        return (
            <div className="wrapLogo">
                <div><img src={html_logo} alt="html"/></div>
                <div><img src={css_logo} alt="css"/></div>
                <div><img src={js_logo} alt="js"/></div>
                <div><img src={vue_logo} alt="vue"/></div>
                <div><img src={scss_logo} alt="scss"/></div>
                <div><img src={jquery_logo} alt="jquery"/></div>
                <div><img src={sorceTree_logo} alt="sourceTree"/></div>
                <div><img src={git_logo} alt="git"/></div>
                test_jenkins
            </div>
            
        )
    }
}