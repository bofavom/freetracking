import './App.css';

import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Panel from './component/panel'
import Import from './component/import'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: '1em'
  },
}))

function App() {
  const classes = useStyles()

  return (
    <Router>
      <div className={classes.root}>
        <Switch>
          <Route path="/import"><Import /></Route>
          <Route path="/"><Panel /></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
