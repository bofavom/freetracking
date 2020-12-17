import React from 'react'
import getPrice from './../../request/price/getPrice'

class CurrentPrice extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      price: 0
    }
  }

  componentDidMount() {
    this.updatePrice()
  }

  updatePrice = () => {
    getPrice()
      .then(result => this.setState({
        price: result.data.price
      }))
      .catch(err => {})
  }

  render() {
    return (
      <div>
        The current price for one unit is { this.state.price }€
      </div>
    )
  }
}

export default CurrentPrice