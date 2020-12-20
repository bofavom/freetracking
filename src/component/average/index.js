import React from 'react'

import { connect } from 'react-redux'

class Average extends React.Component {
  getAverage = () => 
    Math.abs(this.props.spent[`${this.props.currency}EUR`]) / this.props.balance[this.props.currency]

  render() {
    return (
      <div>
        <span> The average purchase price is { this.getAverage().toFixed(8) } EUR</span>
      </div>
    )
  }
}

const mapStateProps = state => ({
  balance: state.trade.balance,
  spent: state.trade.spent
})

export default connect(mapStateProps, null)(Average)