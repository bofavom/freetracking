import React from 'react'

import { connect } from 'react-redux'

import Box from './../box'

class Average extends React.Component {
  getAverage = () => 
    Math.abs(this.props.spent[`${this.props.currency}EUR`]) / this.props.balance[this.props.currency]

  render() {
    return (
      <Box 
        title={ `Average price ${this.props.currency}` }
        text={ `${this.getAverage() ? this.getAverage().toFixed(8) : 0 } EUR` }
      />
    )
  }
}

const mapStateProps = state => ({
  balance: state.trade.balance,
  spent: state.trade.spent
})

export default connect(mapStateProps, null)(Average)