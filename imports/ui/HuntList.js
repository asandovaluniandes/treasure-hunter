import React, { Component } from 'react'
import Hunt from './Hunt'

class HuntList extends Component {
  renderHunts () {
    return this.props.hunts.map(hunt => {
      return (<Hunt key={hunt._id} hunt={hunt} goToHunt={this.props.goToHunt} />)
    })
  }

  render () {
    return (
      <div>
        <h2>Hunts</h2>
        <div>
          {this.renderHunts()}
        </div>
      </div>
    )
  }
}

export default HuntList