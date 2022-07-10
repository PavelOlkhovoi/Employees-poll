import '../App.css';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import initialData from '../actions/shared';

function App({dispatch, users, questions}) {
  useEffect(()=> {
    dispatch(initialData())
  }, [])

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

const mapStateToProps = (state) => {
  return {
    users: state.users,
    questions: state.questions
  }
}

export default connect(mapStateToProps)(App);
