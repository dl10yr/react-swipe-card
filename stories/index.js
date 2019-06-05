import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Cards, { Card } from '../src/index'
import './style.css'

const data = ['Alexandre', 'Thomas', 'Lucien', 'Saimon', 'Jokhim', 'Mandeep']

storiesOf('Tinder card', module)
  .add('simple', () => (
    <div>
      <h1>react swipe card</h1>
      <Cards onEnd={action('end')} className='master-root'
        likeOverlay={<div>Like</div>}
        dislikeOverlay={<div>Dislike</div>}
      >
        {data.map((item, key) =>
          <Card
            key={key}
            onSwipeLeft={action('swipe left')}
            onSwipeRight={action('swipe right')}>
            <h2>{item}</h2>
          </Card>
        )}
      </Cards>
    </div>
  ))
  .add('custom alert', () => (
    <div>
      <h1>react swipe card</h1>
      <Cards
        onEnd={action('end')}
        className='master-root'
        likeOverlay={<div>Like</div>}
        dislikeOverlay={<div>Dislike</div>}
      >
        {data.map((item, key) =>
          <Card
            key={key}
            onSwipeLeft={action('swipe left')}
            onSwipeRight={action('swipe right')}>
            <h2>{item}</h2>
          </Card>
        )}
      </Cards>
    </div>
  ))
  .add('all swipe directions', () => {
    let cards;
    return (
      <div>
        <h1>react swipe card</h1>
        <Cards
          onEnd={action('end')}
          className='master-root'
          likeOverlay={<div>Like</div>}
          dislikeOverlay={<div>Dislike</div>}
          ref={(ref) => cards = ref}
        >
          {data.map((item, key) =>
            <Card
              key={key}
              onSwipeLeft={action('swipe left')}
              onSwipeRight={action('swipe right')}
            >
              <h2>{item}</h2>
            </Card>
          )}
        </Cards>
        <button className={'action-button'}
          onClick={() => {
            cards.dislike();
          }}
        >Dislike</button>
        <button
          className={'action-button'}
          onClick={() => {
            cards.like();
          }}
        >Like</button>
      </div>
    )
  })