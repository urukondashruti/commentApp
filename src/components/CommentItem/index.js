import {formatDistanceToNow} from 'date-fns'

import './index.css'

const Items = props => {
  const {Item, onClickBut, onDelete} = props
  const {id, head, comment, isLike, initialClassNames, date} = Item

  const date1 = formatDistanceToNow(date)

  const onChangeBut = () => {
    onClickBut(id)
  }

  const onClickDelete = () => {
    onDelete(id)
  }

  const imgUrl = isLike
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const con = isLike ? 'like' : 'unlike'

  const name1 = head[0].toUpperCase()

  return (
    <li className="list1">
      <div className="list2">
        <div className={`con3 ${initialClassNames}`}>
          <p>{name1}</p>
        </div>
        <h1 className="head1">{head}</h1>
        <p className="date1">{date1}</p>
      </div>
      <p className="para6">{comment}</p>
      <div className="div5">
        <button type="button" onClick={onChangeBut} className="button1">
          <div className="But">
            <div>
              <img src={imgUrl} alt="like" />
            </div>
            <p className={`Like ${con}`}>Like</p>
          </div>
        </button>
        <button
          type="button"
          className="button1"
          data-testid="delete"
          onClick={onClickDelete}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
      <hr className="Horizontal" />
    </li>
  )
}

export default Items
