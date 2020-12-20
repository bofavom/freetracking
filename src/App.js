import './App.css';

import CurrentPrice from './component/currentPrice'
import Balance from './component/balance'
import Spent from './component/spent'
import Average from './component/average'
import Trades from './component/trades'

function App() {
  return (
    <div className="App">
      <CurrentPrice />
      <Balance currency="EUR" />
      <Balance currency="BTC" />
      <Spent buyCurrency="BTC" sellCurrency="EUR" />
      <Average currency="BTC" />
      <Trades currency="BTC" />
    </div>
  );
}

export default App;
