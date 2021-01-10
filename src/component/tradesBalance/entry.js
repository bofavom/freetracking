import React from 'react'

import { connect } from 'react-redux'

import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'

const tableStyle = {
  marginBottom: '1em'
}

const text = {
  fontSize: 'medium'
}

const subtext = {
  fontSize: 'smaller'
}

const profit = {
  backgroundColor: '#00af1950'
}

const loss = {
  backgroundColor: '#ef210250'
}

const noted = {
  fontWeight: 'bold'
}

class TradeBalance extends React.Component {
  getDate = () => new Date(this.props.trade.date)

  getBuyAmount = () => Number(this.props.trade.buyAmount.toFixed(8))

  getBuyCurrency = () => this.props.trade.buyCurrency

  getSellAmount = () => Number(this.props.trade.sellAmount.toFixed(8))

  getSellCurrency = () => this.props.trade.sellCurrency

  getBoughtPrice = () => 
    this.props.trade.sellAmount / this.props.trade.buyAmount

  getValueAtTransaction = () =>
    this.getBuyAmount() * this.getBoughtPrice()

  getValueNow = () =>
    this.getBuyAmount() * this.props.price

  getProfit = () =>
    Number((this.getValueNow() - this.getValueAtTransaction()).toFixed(8))

  getProfitPercent = () =>
    Number((this.getProfit() / this.getValueAtTransaction() * 100).toFixed(2))

  render() {
    return (
      <TableContainer component={Paper} style={tableStyle}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={text}>{this.getDate().toString()}</TableCell>
              <TableCell />
              <TableCell />
              <TableCell />
            </TableRow>
          </TableHead>

          <TableBody>
            <TableRow>
              <TableCell style={subtext}>{`${this.getBuyCurrency()} value at transaction: `}</TableCell>
              <TableCell style={subtext}>{`${this.getBuyAmount()} ${this.getBuyCurrency()}`}</TableCell>
              <TableCell style={subtext}>{`@ ${this.getBoughtPrice().toFixed(2)} ${this.getSellCurrency()} = `}</TableCell>
              <TableCell style={subtext}>{`${this.getValueAtTransaction().toFixed(2)} ${this.getSellCurrency()}`}</TableCell>
            </TableRow>

            <TableRow>
              <TableCell style={subtext}>{`${this.getBuyCurrency()} value now: `}</TableCell>
              <TableCell style={subtext}>{`${this.getBuyAmount()} ${this.getBuyCurrency()}`}</TableCell>
              <TableCell style={subtext}>{`@ ${this.props.price ? this.props.price.toFixed(2) : '0'} EUR = `}</TableCell>
              <TableCell style={subtext}>{`${this.getValueNow().toFixed(2)} ${this.getSellCurrency()}`}</TableCell>
            </TableRow>

            <TableRow style={ this.getProfit() > 0 ? profit : loss }>
              <TableCell></TableCell>
              <TableCell><span style={noted}>{this.getProfit() > 0 ? 'Profit: ' : 'Loss: '}</span>{`${this.getProfitPercent()}%`}</TableCell>
              <TableCell></TableCell>
              <TableCell style={noted}>{`${this.getProfit().toFixed(2)} ${this.getSellCurrency()}`}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    )
  }
}

const mapStateProps = state => ({
  price: state.price.price
})

export default connect(mapStateProps, null)(TradeBalance)