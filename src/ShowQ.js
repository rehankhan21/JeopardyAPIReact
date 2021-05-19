import React, { Component } from 'react'

class ShowQuestion extends Component {

    constructor(props) {
        super(props)

        this.state = {
            question: this.props.question,
            isActive: false
        }
    }

    render() {
        return (
            <div>

            </div>
        )
    }

}

export default ShowQuestion