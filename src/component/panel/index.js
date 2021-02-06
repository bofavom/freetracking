import { BrowserRouter as Route, Switch, Link } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'

import CurrentPrice from './../currentPrice'
import Balance from './../balance'
import Spent from './../spent'
import Average from './../average'
import FirstTrade from './../firstTrade'
import LastTrade from './../lastTrade'
import TotalTrades from './../totalTrades'
import Trades from './../trades'
import TradesBalance from './../tradesBalance'

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}))

const fabStyle = {
  right: 20,
  bottom: 20,
  position: 'fixed'
}

function Panel(props) {
  const classes = useStyles()

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <CurrentPrice />
        </Paper>
      </Grid>

      <Grid item xs={12} lg={3}>
        <Paper className={classes.paper}>
          <Balance currency="EUR" />
        </Paper>
      </Grid>

      <Grid item xs={12} lg={3}>
        <Paper className={classes.paper}>
          <Balance currency="BTC" />
        </Paper>
      </Grid>

      <Grid item xs={12} lg={3}>
        <Paper className={classes.paper}>
          <Spent buyCurrency="BTC" sellCurrency="EUR" />
        </Paper>
      </Grid>

      <Grid item xs={12} lg={3}>
        <Paper className={classes.paper}>
          <Average currency="BTC" />
        </Paper>
      </Grid>

      <Grid item xs={12} lg={3}>
        <Paper className={classes.paper}>
          <FirstTrade />
        </Paper>
      </Grid>

      <Grid item xs={12} lg={3}>
        <Paper className={classes.paper}>
          <LastTrade />
        </Paper>
      </Grid>

      <Grid item xs={12} lg={3}>
        <Paper className={classes.paper}>
          <TotalTrades />
        </Paper>
      </Grid>

      <Grid item xs={12} lg={12}>
        <TradesBalance />
      </Grid>

      <Grid item xs={12} lg={12}>
        <Trades />
      </Grid>

      <Link to="/import">
        <Fab color="secondary" aria-label="add" style={fabStyle}>
          <AddIcon />
        </Fab>
      </Link>
    </Grid>
  )
}

export default Panel