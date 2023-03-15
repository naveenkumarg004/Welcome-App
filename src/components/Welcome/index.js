import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {isSubscribed: false}

  toSubscribed = () => {
    this.setState(prevState => ({isSubscribed: !prevState.isSubscribed}))
  }

  toSubscribe = () => {
    this.setState(prevState => ({isSubscribed: !prevState.isSubscribed}))
  }

  renderAuthButton = () => {
    const {isSubscribed} = this.state

    if (isSubscribed === true) {
      return (
        <button onClick={this.toSubscribed} type="button" className="btn">
          Subscribed
        </button>
      )
    }
    return (
      <button onClick={this.toSubscribe} type="button" className="btn">
        Subscribe
      </button>
    )
  }

  render() {
    return (
      <div className="bg">
        <h1 className="head">Welcome</h1>
        <p className="para">Thank you! Happy Learning</p>
        {this.renderAuthButton()}
      </div>
    )
  }
}
export default Welcome
