import React from 'react'

import { connect } from 'react-redux'

import Box from './../box'

class TotalTrades extends React.Component {

  getTradesAmount = () => 
    this.props.trades.length

  render() {
    return (
      <Box
        title={ 'Total trades' }
        text={ this.getTradesAmount() }
      />
    )
  }
}

const mapStateProps = state => ({
  trades: state.trade.trades
})

export default connect(mapStateProps, null)(TotalTrades)