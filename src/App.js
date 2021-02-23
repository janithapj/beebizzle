import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Image from './Image';
import Specification from './Specification';
function App() {
  return (
    <div className="App" style={{ backgroundColor: "white" }} >

      <header className="App-header">
        <Navbar></Navbar>
        <div style={{ float: 'left' }}>
          <Image></Image>
        </div>
        <div style={{ float: 'right' }}>
          <Specification></Specification>
        </div>

      </header>

    </div>
  );
}

export default App;
