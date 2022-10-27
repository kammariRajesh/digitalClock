import {Component} from 'react'

import './index.css'

class DigitalTimer extends Component {
  constructor(props) {
    super(props)
    this.state = {timeInMinuts: 0, timeInSeconds: 60, isPaused: true}
  }

  onDecrease = () => this.setState(p => ({timeInMinuts: p.timeInMinuts - 1}))

  onIncrease = () => this.setState(p => ({timeInMinuts: p.timeInMinuts + 1}))

  playPause = () => {
    const {timeInSeconds, timeInMinuts} = this.state
    const timerId = setInterval(() => {
      if (timeInMinuts > 0) {
        if (timeInSeconds > 0) {
          this.setState(p => ({timeInSeconds: p.timeInSeconds - 1}))
        }
        if (timeInSeconds === 0) {
          this.setState({timeInSeconds: 60})
          this.setState(p => ({timeInMinuts: p.timeInMinuts - 1}))
        }
      } else {
        clearInterval(timerId)
      }
    }, 1000)
  }

  render() {
    const {timeInMinuts, timeInSeconds, isPaused} = this.state
    const playPauseIcon = isPaused
      ? 'https://assets.ccbp.in/frontend/react-js/play-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/pause-icon-img.png'
    return (
      <div className="bg-container">
        <h1>Digital Timer</h1>
        <div className="responsive-card">
          <div className="timer-bg">
            <div className="circle">
              <h1>
                {timeInMinuts}:{timeInSeconds}
              </h1>
              <p>{isPaused ? 'Paused' : 'Running'}</p>
            </div>
          </div>
          <div className="options-card">
            <div className="timer-options">
              <div className="option">
                <button
                  type="button"
                  className="icon-btn"
                  onClick={this.playPause}
                >
                  <img src={playPauseIcon} alt="" className="icon" />
                </button>
                <p>{isPaused ? 'Start' : 'Pause'}</p>
              </div>
              <div className="option">
                <button type="button" className="icon-btn">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png "
                    alt=""
                    className="icon"
                  />
                </button>
                <p>Reset</p>
              </div>
            </div>
            <p>Set Timer Limit</p>
            <div className="buttons-card">
              <button type="button" className="btn" onClick={this.onDecrease}>
                -
              </button>
              <span>{timeInMinuts}</span>
              <button type="button" className="btn" onClick={this.onIncrease}>
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default DigitalTimer
