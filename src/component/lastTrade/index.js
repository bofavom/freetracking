import React from 'react'

import { connect } from 'react-redux'

import Box from './../box'

class LastTrade extends React.Component {

  getLastTradeDate = () => 
    this.props.trades.length > 0
    ? new Date(this.props.trades[this.props.trades.length - 1].date)
    : new Date()

  render() {
    return (
      <Box
        title={ 'Last trade' }
        text={ this.getLastTradeDate().toDateString() }
      />
    )
  }
}

const mapStateProps = state => ({
  trades: state.trade.trades
})

export default connect(mapStateProps, null)(LastTrade)