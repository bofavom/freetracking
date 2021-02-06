import React from 'react'
import { BrowserRouter as Route, Switch, Link } from 'react-router-dom'

import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'

import ImportKraken from './kraken'
import ImportBinance from './binance'
import ImportCoinTracking from './cointracking'

function Import() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Link to="/">
          <Button>Panel</Button>
        </Link>

        {/* <Link to="/import">
        <Button>Import</Button>
        </Link> */}

        <Link to="/import/kraken">
          <Button>Kraken</Button>
        </Link>

        <Link to="/import/binance">
          <Button>Binance</Button>
        </Link>

        <Link to="/import/cointracking">
          <Button>CoinTracking</Button>
        </Link>
      </Grid>

      <Grid item xs={12}>
        <Switch>
          <Route path="/import/kraken"><ImportKraken /></Route>
          <Route path="/import/binance"><ImportBinance /></Route>
          <Route path="/import/cointracking"><ImportCoinTracking /></Route>
        </Switch>
      </Grid>
    </Grid>
  )
}

export default Import