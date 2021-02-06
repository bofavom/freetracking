import React from 'react'

import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Backdrop from '@material-ui/core/Backdrop'
import CircularProgress from '@material-ui/core/CircularProgress'
import JSONPretty from 'react-json-pretty'

import importKraken from './../../request/trade/importKraken'

const error = {
  color: 'red'
}

class ImportKraken extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      file: '',
      message: '',
      response: '',
      responseStatus: 0,
      isLoading: false
    }
  }

  handleOnUploadFile = (event) =>
    this.setState({
      file: event.target.files[0]
    })

  handleOnSend = () => {
    this.setState({
      isLoading: true
    })

    importKraken(this.state.file)
      .then(res => {
        console.log('res');
        console.log(res);
        this.setState({
          message: 'Data succesfully imported',
          response: JSON.stringify(res.data, null, 2),
          responseStatus: res.status,
          isLoading: false
        })
      })
      .catch(err => {
        this.setState({
          message: err.response.data.error.toString(),
          response: JSON.stringify(err.response.data, null, 2),
          responseStatus: err.response.status,
          isLoading: false
        })
      })
  }


  render() {
    return (
      <Grid container spacing={3}>
        <Backdrop open={this.state.isLoading} style={{ zIndex: 999 }}>
          <CircularProgress color="inherit" />
        </Backdrop>

        <Grid item xs={12}>
          <Typography variant="h4" gutterBottom>
            Import Kraken
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Button
            variant="contained"
            component="label"
            style={{ marginRight: '1em' }}
          >
            Browse file
            <input
              hidden
              type="file"
              name="csv"
              onChange={this.handleOnUploadFile}
            />
          </Button>

          <Typography variant="caption">
            {this.state.file.name}
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Button variant="contained" color="primary" onClick={this.handleOnSend}>
            Import
          </Button>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="body1" style={this.state.responseStatus > 200 ? error : null}>
            {this.state.message}
          </Typography>

          <JSONPretty data={this.state.response} />
        </Grid>
      </Grid>
    )
  }
}

export default ImportKraken