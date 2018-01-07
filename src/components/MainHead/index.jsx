import React, {Component} from 'react'

import './style.less'

class MainHead extends Component {
    render() {
        return (
            <div className="main-head">
                {this.props.title}
            </div>
        )
    }
}

export default MainHead