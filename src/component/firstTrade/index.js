import React from 'react'

import { connect } from 'react-redux'

import Box from './../box'

class FirstTrade extends React.Component {

  getFirstTradeDate = () => 
    this.props.trades.length > 0
    ? new Date(this.props.trades[0].date)
    : new Date()

  render() {
    return (
      <Box
        title={ 'First trade' }
        text={ this.getFirstTradeDate().toDateString() }
      />
    )
  }
}

const mapStateProps = state => ({
  trades: state.trade.trades
})

export default connect(mapStateProps, null)(FirstTrade)