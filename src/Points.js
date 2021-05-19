
import React, {Component} from 'react'

class Points extends Component {

    constructor(props){
        super(props)

        this.state = {
            points : 0
        }

        this.changePoints = this.changePoints.bind(this)
    }

    changePoints(event) {
        if(event.target.value == "increase"){
            this.setState({
                points : this.state.points + 100
            })
        }
        else if(event.target.value == "decrease"){
            this.setState({
                points : this.state.points - 100
            })
        }
        else if(event.target.value == "reset"){
            this.setState({
                points : 0
            })
        }

        console.log(event.target.value)
    }

    render() {
        return (
            <div>
                <h2>
                    Score: {this.state.points}
                </h2>
                <button value="increase" onClick={this.changePoints}>Increase</button>
                <button value="decrease" onClick={this.changePoints}>Decrease</button>
                <button value="reset" onClick={this.changePoints}>Reset</button>
            </div>
        )
    }
}

export default Points