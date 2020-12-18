import React from 'react'
import getBalance from './../../request/trade/getBalance'

import { connect } from 'react-redux'
import { updateBalance } from './../../redux/actions'

class CurrentBalance extends React.Component {
  componentDidMount() {
    this.updateBalance(
      this.props.currency
    )
  }

  updateBalance = (currency) => {
    getBalance(currency)
      .then(result => 
        this.props.updateBalance(
          result.data.amount,
          result.data.currency
        )
      )
      .catch(err => {})
  }

  render() {
    return (
      <div>
        <span>{ this.props.balance[this.props.currency] ? this.props.balance[this.props.currency].toFixed(8) : '' } { this.props.currency } </span>
        { this.props.currency === 'EUR' ? null : <span> 
          ({ (Number(this.props.balance[this.props.currency]) * Number(this.props.price)).toFixed(8) } EUR)
        </span> }
      </div>
    )
  }
}

const mapStateProps = state => ({
  balance: state.trade.balance,
  price: state.price.price
})

const mapDispatchToProps = {
  updateBalance,
}

export default connect(mapStateProps, mapDispatchToProps)(CurrentBalance)