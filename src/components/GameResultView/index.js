import './index.css'

const GameResultView = props => {
  const {result, userImage, opponentImage, clickPlayAgain} = props

  let resultMsg = null

  if (result === 'WON') {
    resultMsg = 'YOU WON'
  } else if (result === 'LOSE') {
    resultMsg = 'YOU LOSE'
  } else {
    resultMsg = 'IT IS DRAW'
  }

  const onClickPlayAgain = () => {
    clickPlayAgain()
  }

  return (
    <div className="show-result-container">
      <div className="main-result-container">
        <div className="result-container">
          <h1 className="show-result-heading">YOU</h1>
          <img
            src={userImage}
            alt="your choice"
            className="show-result-image"
          />
        </div>

        <div className="result-container">
          <h1 className="show-result-heading">OPPONENT</h1>
          <img
            src={opponentImage}
            alt="opponent choice"
            className="show-result-image"
          />
        </div>
      </div>
      <div>
        <p className="show-result-message">{resultMsg}</p>
        <button
          type="button"
          className="play-again-button"
          onClick={onClickPlayAgain}
        >
          PLAY AGAIN
        </button>
      </div>
    </div>
  )
}

export default GameResultView
