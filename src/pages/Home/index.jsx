import React, { Component } from 'react'
import {connect} from 'react-redux'

import MainHead from '../../components/MainHead'
import {changeInputVal} from "../../store/ActionCreator"

import './style.less'

class Home extends Component {
    render() {
        return (
            <div>
                <MainHead title="Home"/>
                <div className="home">
                    <img src={require('../../../static/img/logo.jpg')} className="logo"/>
                    <h2 className="title">Welcome to react app</h2>
                    <div>example for redux</div>
                    <input onInput={this.inputHandler.bind(this)} className="inp"/>
                    <div>input value: {this.props.inputVal}</div>
                    <button
                        style={{marginTop: '10px'}}
                        onClick={this.LinkTo.bind(this)}
                    >router to Hello</button>
                </div>
            </div>
        )
    }

    inputHandler(e){
        this.props.dispatch(changeInputVal(e.target.value))
    }

    LinkTo(){
        this.props.history.push('/Hello')
    }
}

export default connect(
    (state)=>{
        return {
            inputVal: state.inputVal
        }
    }
)(Home)