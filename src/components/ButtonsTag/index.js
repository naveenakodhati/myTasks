import './index.css'

const ButtonsTag = props => {
  const {data, onUpdateBtns} = props
  const {displayText, optionId} = data

  const onUpdateButton = () => {
    onUpdateBtns(optionId)
  }

  return (
    <li className="list-btn-el">
      <button onClick={onUpdateButton} className="tag-btn" type="button">
        {displayText}
      </button>
    </li>
  )
}

export default ButtonsTag
