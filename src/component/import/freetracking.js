import React from 'react'

import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Backdrop from '@material-ui/core/Backdrop'
import CircularProgress from '@material-ui/core/CircularProgress'
import JSONPretty from 'react-json-pretty'

import exportFreeTracking from './../../request/trade/exportFreeTracking'

const error = {
  color: 'red'
}

class FreeTracking extends React.Component {

  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h4" gutterBottom>
            Export FreeTracking
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Button variant="contained" color="primary" href={exportFreeTracking()}>
            Export
          </Button>
        </Grid>
      </Grid>
    )
  }
}

export default FreeTracking