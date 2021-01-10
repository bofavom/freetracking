import React from 'react'
import { connect } from 'react-redux'

import TradeBalance from './entry'

class TradesBalance extends React.Component {
  getSortedTrades = () =>
    this.props.trades.sort((a, b) =>
      new Date(b.date).getTime() - new Date(a.date).getTime()
    )

  render() {
    return (
      <div>
        {
          this.getSortedTrades().map(trade => 
            <TradeBalance key={trade._id} trade={trade} />
          )
        }
      </div>
    )
  }
}

const mapStateProps = state => ({
  trades: state.trade.trades
})

export default connect(mapStateProps, null)(TradesBalance)