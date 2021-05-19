import React, { Component } from 'react'
import Game from './Game'

class FetchQuestion extends Component {
    constructor(props) {
        super(props)

        this.state = {
            loading: true,
            question: "",
            answer: ""
        }

        this.getQ = this.getQ.bind(this)
        this.getA = this.getA.bind(this)
    }

    async componentDidMount() {
        const url = "http://jservice.io/api/random"
        const response = await fetch(url);
        const data = await response.json();
        //return data[0].question
        this.setState({
            question: data[0].question,
            answer: data[0].answer,
            category: data[0].category.title
        })
    }

    async getQ() {

        // let question = this.state.question
        // this.props.getQuestion(question)

        const url = "http://jservice.io/api/random"
        const response = await fetch(url);
        const data = await response.json();
        //return data[0].question
        this.setState({
            question: data[0].question,
            answer: data[0].answer,
            category: data[0].category.title
        })

        let question = this.state.question
        let answer = this.state.answer
        let category = this.state.category
        this.props.getQuestion(question, answer, category)

        console.log(data)
    }

     getA() {
        
        let answer = this.state.answer
        this.props.getAnswer(answer)
    }
    

    render() {
        return (
            <div>
                {/* {this.state.loading ? <div>loading...} */}
                <button onClick={this.getQ}>Get Question</button>
                {/* <button onClick={this.getA}>Get Answer</button> */}
            </div>
        )
    }

}

export default FetchQuestion