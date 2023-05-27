import {v4} from 'uuid'

import {Component} from 'react'

import Items from '../CommentItem'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comments extends Component {
  state = {
    commentList: [],
    searchInput: '',
    searchText: '',
    count: 0,
  }

  onSubmitClick = event => {
    event.preventDefault()
    const {searchInput, searchText} = this.state
    const initialContainerClassNames = Math.ceil(
      Math.random() * initialContainerBackgroundClassNames.length - 1,
    )
    const newObject = {
      id: v4(),
      head: searchInput,
      comment: searchText,
      isLike: false,
      initialClassNames:
        initialContainerBackgroundClassNames[initialContainerClassNames],
      date: new Date(),
    }

    this.setState(prevState => ({
      commentList: [...prevState.commentList, newObject],
      searchInput: '',
      searchText: '',
      count: prevState.count + 1,
    }))
  }

  onChangeInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onChangeText = event => {
    this.setState({searchText: event.target.value})
  }

  onClickBut = id => {
    const {commentList} = this.state
    const value1 = commentList.map(each => {
      if (id === each.id) {
        return {
          ...each,
          isLike: !each.isLike,
        }
      }
      return each
    })
    this.setState({commentList: value1})
  }

  onDelete = id => {
    const {commentList} = this.state

    const value3 = commentList.filter(each => each.id !== id)

    this.setState(prevState => ({
      commentList: value3,
      count: prevState.count - 1,
    }))
  }

  render() {
    const {commentList, searchInput, searchText, count} = this.state

    return (
      <div>
        <form className="div" onSubmit={this.onSubmitClick}>
          <div className="con">
            <h1 className="head">Comments</h1>
            <p>Say something about 4.0 Technologies</p>
            <input
              placeholder="Your Name"
              type="text"
              value={searchInput}
              onChange={this.onChangeInput}
              className="input"
            />
            <textarea
              placeholder="Your Comment"
              type="text"
              value={searchText}
              onChange={this.onChangeText}
              className="text"
            />
            <button type="submit" className="button">
              Add Comment
            </button>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            alt="comments"
            className="size"
          />
        </form>
        <hr className="ho" />
        <div className="div2">
          <div className="con4">
            <p className="para">{count}</p>
          </div>
          <p className="para1">Comments</p>
        </div>
        <ul>
          {commentList.map(each => (
            <Items
              key={each.id}
              onClickBut={this.onClickBut}
              onDelete={this.onDelete}
              Item={each}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Comments
