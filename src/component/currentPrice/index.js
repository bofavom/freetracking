import React from 'react'
import getPrice from './../../request/price/getPrice'

import { connect } from 'react-redux'
import { updatePrice } from './../../redux/actions'

class CurrentPrice extends React.Component {
  componentDidMount() {
    this.updatePrice()
  }

  updatePrice = () => {
    getPrice()
      .then(result => this.props.updatePrice(result.data.price))
      .catch(err => {})
  }

  render() {
    return (
      <div>
        The current price for one unit is { this.props.price }€
      </div>
    )
  }
}

const mapStateToProps = state => ({
  price: state.price.price,
})

const mapDispatchToProps = {
  updatePrice,
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrentPrice)