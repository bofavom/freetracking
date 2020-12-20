import React from 'react'
import getSpent from './../../request/trade/getSpent'

import { connect } from 'react-redux'
import { updateSpent } from './../../redux/actions'

import Typography from '@material-ui/core/Typography'

class Spent extends React.Component {
  componentDidMount() {
    this.updateSpent(
      this.props.buyCurrency,
      this.props.sellCurrency
    )
  }

  updateSpent = (buyCurrency, sellCurrency) => {
    getSpent(buyCurrency, sellCurrency)
      .then(result => 
        this.props.updateSpent(
          result.data.amount,
          buyCurrency,
          sellCurrency
        )
      )
      .catch(err => {})
  }

  render() {
    return (
      <div>
        <Typography gutterBottom variant="h5" component="h2">
          Total spent in { this.props.buyCurrency }
        </Typography>
        <span> { 
          this.props.spent[`${this.props.buyCurrency}${this.props.sellCurrency}`] ?
          this.props.spent[`${this.props.buyCurrency}${this.props.sellCurrency}`].toFixed(8) :
          null
        } { this.props.sellCurrency } </span>
      </div>
    )
  }
}

const mapStateProps = state => ({
  spent: state.trade.spent
})

const mapDispatchToProps = {
  updateSpent,
}

export default connect(mapStateProps, mapDispatchToProps)(Spent)