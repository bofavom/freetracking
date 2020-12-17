import React from 'react'
import getBalance from './../../request/trade/getBalance'

class CurrentBalance extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      amount: 0,
      currency: ''
    }
  }

  componentDidMount() {
    this.updateBalance(
      this.props.currency
    )
  }

  updateBalance = (currency) => {
    getBalance(currency)
      .then(result => this.setState({
        balance: result.data.amount,
        currency: result.data.currency
      }))
      .catch(err => {})
  }

  render() {
    return (
      <div>
        <span>{ this.state.balance } { this.state.currency }</span>
      </div>
    )
  }
}

export default CurrentBalance