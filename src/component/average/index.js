import React from 'react'

import { connect } from 'react-redux'

import Typography from '@material-ui/core/Typography'

class Average extends React.Component {
  getAverage = () => 
    Math.abs(this.props.spent[`${this.props.currency}EUR`]) / this.props.balance[this.props.currency]

  render() {
    return (
      <div>
        <Typography gutterBottom variant="h5" component="h2">
          Average price { this.props.currency }
        </Typography>
        <span> { this.getAverage().toFixed(8) } EUR</span>
      </div>
    )
  }
}

const mapStateProps = state => ({
  balance: state.trade.balance,
  spent: state.trade.spent
})

export default connect(mapStateProps, null)(Average)