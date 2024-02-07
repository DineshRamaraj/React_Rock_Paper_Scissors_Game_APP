import {Component} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import PlayingView from '../PlayingView'
import GameResultView from '../GameResultView'

import Score from './StyledComponents'
import './index.css'

class RockPaperGame extends Component {
  state = {
    score: 0,
    result: '',
    showResult: false,
    userImage: [],
    opponentImage: {},
  }

  changeActiveId = userId => {
    const {choicesList} = this.props
    const randomNumber = Math.floor(Math.random() * 3)
    const computerId = choicesList[randomNumber].id
    const user = choicesList.find(eachItem => eachItem.id === userId)
    const computer = choicesList.find(eachItem => eachItem.id === computerId)

    if (
      (userId === 'SCISSORS' && computerId === 'PAPER') ||
      (userId === 'PAPER' && computerId === 'ROCK') ||
      (userId === 'ROCK' && computerId === 'SCISSORS')
    ) {
      this.setState(prevState => ({result: 'WON', score: prevState.score + 1}))
    } else if (userId === computerId) {
      this.setState({result: 'DRAW'})
    } else {
      this.setState(prevState => ({result: 'LOSE', score: prevState.score - 1}))
    }
    this.setState({
      showResult: true,
      userImage: user.imageUrl,
      opponentImage: computer.imageUrl,
    })
  }

  clickPlayAgain = () => {
    const {result} = this.state
    if (result === 'DRAW') {
      this.setState({showResult: false})
    } else if (result === 'WON') {
      this.setState({showResult: false, score: 0})
    } else {
      this.setState({showResult: false})
    }
  }

  renderGameResultView = () => {
    const {result, userImage, opponentImage} = this.state
    return (
      <GameResultView
        result={result}
        userImage={userImage}
        opponentImage={opponentImage}
        clickPlayAgain={this.clickPlayAgain}
      />
    )
  }

  renderPlayingView = () => {
    const {choicesList} = this.props
    return (
      <ul className="app-list-container">
        {choicesList.map(eachItem => (
          <PlayingView
            eachItem={eachItem}
            key={eachItem.id}
            changeActiveId={this.changeActiveId}
          />
        ))}
      </ul>
    )
  }

  render() {
    const {score, showResult} = this.state
    // console.log(score)
    return (
      <div className="main-app-container">
        <div className="app-container">
          <div className="header-container">
            <div className="logo-heading-container">
              <h1 className="logo-heading">Rock Paper Scissors</h1>
            </div>
            <div className="score-container">
              <p className="score-name">Score</p>
              <Score>{score}</Score>
            </div>
          </div>
          {showResult ? this.renderGameResultView() : this.renderPlayingView()}
        </div>

        <Popup
          modal
          trigger={
            <button type="button" className="rules-button">
              Rules
            </button>
          }
        >
          {close => (
            <div className="popup-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                alt="rules"
                className="rules-image"
              />
              {/* eslint-disable-next-line */}
              <button
                type="button"
                onClick={() => close()}
                className="close-button"
              >
                <RiCloseLine />
              </button>
            </div>
          )}
        </Popup>
      </div>
    )
  }
}

export default RockPaperGame
