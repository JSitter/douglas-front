import React, { Component } from 'react';
import './Tweet.css';
import {Button, Icon, Modal} from 'react-materialize';

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
        <div className="tweet">
            <p>
            {this.state.tweet}
            </p>

            <div className="btn-container">
              <div>
              <Button waves='light' btn-small onClick={this.fetchQuote.bind(this)} className="new-s">
                New Sentence
              </Button>
              </div>

              <Modal

                header='Tweet to your fans!'
                trigger={<Button waves='light' className="modal-btn">Tweet This!</Button>}>
                <p>This feature is not implemented yet. Come back again soon!</p>
              </Modal>
            </div>
        </div>
    )
}
}

export default Tweet;
