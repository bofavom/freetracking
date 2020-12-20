import React from 'react'

import { connect } from 'react-redux'

class TradeBalance extends React.Component {
  getDate = () => new Date(this.props.trade.date)

  getBuyAmount = () => Number(this.props.trade.buyAmount.toFixed(8))

  getBuyCurrency = () => this.props.trade.buyCurrency

  getSellAmount = () => Number(this.props.trade.sellAmount.toFixed(8))

  getSellCurrency = () => this.props.trade.sellCurrency

  getBoughtPrice = () => 
    this.props.trade.sellAmount / this.props.trade.buyAmount

  getValueAtTransaction = () =>
    this.getBuyAmount() * this.getBoughtPrice()

  getValueNow = () =>
    this.getBuyAmount() * this.props.price

  getProfit = () =>
    Number((this.getValueNow() - this.getValueAtTransaction()).toFixed(8))

  getProfitPercent = () =>
    Number((this.getProfit() / this.getValueAtTransaction() * 100).toFixed(2))

  componentDidMount() {

  }

  render() {
    return (
      <div>
        <span> { this.getProfit() } ({ this.getProfitPercent() }%)  </span>
      </div>
    )
  }
}

const mapStateProps = state => ({
  price: state.price.price
})

export default connect(mapStateProps, null)(TradeBalance)