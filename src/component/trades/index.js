import React from 'react'
import getTrades from './../../request/trade/getTrades'

import { connect } from 'react-redux'
import { updateTrades } from './../../redux/actions'

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

class Trades extends React.Component {
  componentDidMount() {
    this.updateTrades(
      this.props.currency
    )
  }

  updateTrades = (currency) => {
    getTrades(currency)
      .then(result => 
        this.props.updateTrades(
          result.data
        )
      )
      .catch(err => {})
  }

  render() {
    return (
      <div>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Buy</TableCell>
                <TableCell>Cur.</TableCell>
                <TableCell>Sell</TableCell>
                <TableCell>Cur.</TableCell>
                <TableCell>Fee</TableCell>
                <TableCell>Cur.</TableCell>
                <TableCell>Exchange</TableCell>
                <TableCell>Date</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
            {
            this.props.trades.map(trade => (
              <TableRow key={trade._id}>
                <TableCell>{trade.buyAmount}</TableCell>
                <TableCell>{trade.buyCurrency}</TableCell>
                <TableCell>{trade.sellAmount}</TableCell>
                <TableCell>{trade.sellCurrency}</TableCell>
                <TableCell>{trade.feeAmount}</TableCell>
                <TableCell>{trade.feeCurrency}</TableCell>
                <TableCell>{trade.exchange}</TableCell>
                <TableCell>{new Date(trade.date).toLocaleString()}</TableCell>
              </TableRow>
            ))
            }
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    )
  }
}

const mapStateProps = state => ({
  trades: state.trade.trades
})

const mapDispatchToProps = {
  updateTrades,
}

export default connect(mapStateProps, mapDispatchToProps)(Trades)