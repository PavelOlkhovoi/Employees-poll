import '../App.css';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import initialData from '../actions/shared';
import { Routes, Route, useNavigate, Link, Navigate} from 'react-router-dom'
import { Fragment } from 'react';
import NavMenu from './NavMenu';
import Authorization from './Authorization';
import Home from './Home';
import Poll from './polls/Poll';
import CreatePoll from './polls/CreatePoll';
import LoadingBar from 'react-redux-loading-bar'
import WrongPath from './WrongPath';
import Checkauth from './hoc/Checkauth';


function App({dispatch, users, questions, authed, loading}) {
  const navigate = useNavigate()
  useEffect(()=> {
    dispatch(initialData())
  }, [])
  return (
    <Fragment>
      <div className="App">
        <LoadingBar />
        <NavMenu />
      </div>
      <Routes>
        <Route path='/' element={
          <Checkauth>
            <Home />
          </Checkauth>
        } />
        <Route path='/poll/:id' element={
          <Checkauth>
            <Poll/>
          </Checkauth>
        }/>
        <Route path='auth' element={<Authorization />}/>
        <Route path='create' element={
          <Checkauth>
            <CreatePoll />
          </Checkauth>
        }/>
        <Route path='*' element={<WrongPath />}/>
      </Routes>
    </Fragment>
  );
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
    questions: state.questions,
    authed: state.authed,
  }
}

export default connect(mapStateToProps)(App);
