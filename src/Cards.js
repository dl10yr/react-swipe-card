import React, { Component, cloneElement } from 'react'
import ReactDOM from 'react-dom'
import { DIRECTIONS } from './utils'

class SwipeCards extends Component {
  constructor(props) {
    super(props)
    this.state = {
      like: false,
      dislike: false,
      index: 0,
      containerSize: { x: 0, y: 0 }
    }
    this.removeCard = this.removeCard.bind(this)
  }
  removeCard() {
    const { children, onEnd } = this.props

    if (children.length === (this.state.index + 1) && onEnd) onEnd()

    this.setState({
      like: false,
      dislike: false,
      index: this.state.index + 1
    })
  }

  like() {
    if (!this.state.like && !this.state.dislike) {
      this.setState({
        like: true
      });
    }
  }

  dislike() {
    if (!this.state.like && !this.state.dislike) {
      this.setState({
        dislike: true
      });
    }
  }

  render() {
    const { like, dislike, index } = this.state
    const { children, className, likeOverlay, dislikeOverlay } = this.props

    const _cards = children.reduce((memo, c, i) => {
      if (index > i) return memo
      const props = {
        key: i,
        index: children.length - index,
        ...DIRECTIONS.reduce((m, d) =>
          ({ ...m, [`onOutScreen${d}`]: () => this.removeCard() }), {}),
        active: index === i,
        like,
        dislike,
        likeOverlay,
        dislikeOverlay
      }
      return [cloneElement(c, props), ...memo]
    }, [])

    return (
      <div className={className}>
        <div id='cards'>
          {_cards}
        </div>
      </div>
    )
  }
}

export default SwipeCards