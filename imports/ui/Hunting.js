import React, { Component } from 'react'

import MyMap from './MyMap'
import GamePanel from './GamePanel'

class Home extends Component {
  render () {
    return (
      <div>
        <h1>Hunting</h1>
        <div className='row'>
          <div className='col-lg-7 col-md-7 col-sm-12 col-xs-12'>
            <MyMap />
          </div>
          <div className='col-lg-5 col-md-5 col-sm-12 col-xs-12 gamePanel'>
            <GamePanel />
          </div>
        </div>

      </div>
    )
  }
}

export default Home