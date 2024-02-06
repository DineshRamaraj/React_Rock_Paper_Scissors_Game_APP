import './index.css'

const PlayingView = props => {
  const {eachItem, changeActiveId} = props
  const {id, imageUrl} = eachItem

  const userId = id.toLowerCase()

  const onClickGetId = () => {
    changeActiveId(id)
  }

  return (
    <li className="playing-view-container">
      <button
        type="button"
        className="playing-view-button"
        data-testid={`${userId}Button`}
      >
        <img
          src={imageUrl}
          alt={id}
          className="playing-view-image"
          onClick={onClickGetId}
        />
      </button>
    </li>
  )
}

export default PlayingView
