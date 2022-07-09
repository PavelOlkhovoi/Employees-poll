import '../App.css';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import initialData from '../actions/shared';

function App(props) {
  useEffect(()=> {
    initialData()()()
  })

  console.log(props)
  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

const mapStateToProps = (users) => {
  return {
    users
  }
}

export default connect(mapStateToProps)(App);
