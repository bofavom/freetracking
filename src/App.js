import './App.css';

import CurrentPrice from './component/currentPrice'
import Balance from './component/balance'

function App() {
  return (
    <div className="App">
      <CurrentPrice />
      <Balance currency="EUR" />
      <Balance currency="BTC" />
    </div>
  );
}

export default App;
