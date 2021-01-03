import React from 'react'

import Typography from '@material-ui/core/Typography'

class Box extends React.Component {
  render() {
    return (
      <div>
        <Typography gutterBottom variant="h5" component="h2">
          { this.props.title }
        </Typography>
        
        <span> 
          {this.props.text} 
        </span>
      </div>
    )
  }
}

export default Box