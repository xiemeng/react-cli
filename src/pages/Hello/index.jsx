import React, {Component} from 'react'

import MainHead from '../../components/MainHead'

class Hello extends Component {
    render() {
        return (
            <div style={{paddingTop: '50px', textAlign: 'center'}}>
                <MainHead title="Hello"/>
                <h2>Hello</h2>
                <a onClick={this.props.history.go.bind(this, -1)} href="###">Back to Home</a>
            </div>
        )
    }
}

export default Hello