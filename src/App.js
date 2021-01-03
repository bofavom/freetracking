import './App.css';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

import CurrentPrice from './component/currentPrice'
import Balance from './component/balance'
import Spent from './component/spent'
import Average from './component/average'
import FirstTrade from './component/firstTrade'
import LastTrade from './component/lastTrade'
import TotalTrades from './component/totalTrades'
import Trades from './component/trades'
import TradesBalance from './component/tradesBalance'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: '1em'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}))

function App() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
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
          <Trades />
        </Grid>
      {/* <TradesBalance /> */}
    </Grid>
    </div>
  );
}

export default App;
