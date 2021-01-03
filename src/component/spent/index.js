import React from 'react'
import getSpent from './../../request/trade/getSpent'

import { connect } from 'react-redux'
import { updateSpent } from './../../redux/actions'

import Box from './../box'

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
      <Box 
        title={ `Total spent in ${ this.props.buyCurrency }` }
        text={ `${ 
          this.props.spent[`${this.props.buyCurrency}${this.props.sellCurrency}`] ?
          this.props.spent[`${this.props.buyCurrency}${this.props.sellCurrency}`].toFixed(8) :
          0
        } ${ this.props.sellCurrency }` }
      />
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