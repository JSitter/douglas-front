import React, { Component } from 'react';

class Tweet extends Component {
constructor(props){
    super(props)
    this.state = {tweet:''}
}

fetchQuote(){
    fetch('http://douglas-adams-backend.herokuapp.com/')
    .then((res)=>{
        return res.text()
    }).then((text)=>{
        this.setState({tweet: text})
    })
}
componentWillMount(){
    this.fetchQuote()
}
render(){
    return(
        <div>
            <p>
            {this.state.tweet}
            </p>
        </div>
    )
}
}

export default Tweet;
