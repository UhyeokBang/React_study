import './App.css';
import MyHeader from './MyHeader';
import MyFooter from './MyFooter';


function App() {
  return (
    <div className="App">
      <MyHeader />
      <header className="App-header">
        <h2>안녕 리액트</h2>
      </header>
      <MyFooter />
    </div>
  );
}

export default App;
