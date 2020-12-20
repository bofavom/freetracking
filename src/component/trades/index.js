import React from 'react'
import getTrades from './../../request/trade/getTrades'

import { connect } from 'react-redux'
import { updateTrades } from './../../redux/actions'

class Trades extends React.Component {
  componentDidMount() {
    this.updateTrades(
      this.props.currency
    )
  }

  updateTrades = (currency) => {
    getTrades(currency)
      .then(result => 
        this.props.updateTrades(
          result.data
        )
      )
      .catch(err => {})
  }

  render() {
    return (
      <div>
        {
          this.props.trades.map(trade => {
            return <p key={trade._id}>
              { JSON.stringify(trade) }
            </p>
          })
        }
      </div>
    )
  }
}

const mapStateProps = state => ({
  trades: state.trade.trades
})

const mapDispatchToProps = {
  updateTrades,
}

export default connect(mapStateProps, mapDispatchToProps)(Trades)