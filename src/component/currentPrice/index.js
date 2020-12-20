import React from 'react'
import getPrice from './../../request/price/getPrice'

import { connect } from 'react-redux'
import { updatePrice } from './../../redux/actions'

import Typography from '@material-ui/core/Typography'

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
        <Typography variant="h4" gutterBottom>
          1 unit of sound money worth {this.props.price} EUR
        </Typography>
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