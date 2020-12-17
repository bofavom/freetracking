import './App.css';

import CurrentPrice from './component/currentPrice'
import Balance from './component/balance'

function App() {
  return (
    <div className="App">
      <CurrentPrice />
      <Balance currency="eur" />
      <Balance currency="btc" />
    </div>
  );
}

export default App;
