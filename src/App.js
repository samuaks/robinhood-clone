import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Feed from './Feed';
import Stats from './Stats';

function App() {
  return (
    <div className="App">
      <div className="app__header">
        <Header/>
      </div>

      <div className="app__body">
        <div className="app__container">
          <Feed/>
          <Stats/>
        </div>
      </div>

    </div>
  );
}

export default App;
