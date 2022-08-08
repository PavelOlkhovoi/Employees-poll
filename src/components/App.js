import '../App.css';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import initialData from '../actions/shared';
import { Routes, Route, useNavigate, Link, Navigate} from 'react-router-dom'
import { Fragment } from 'react';
import Authorization from './Authorization';
import Home from './Home';
import Poll from './polls/Poll';
import CreatePoll from './polls/CreatePoll';
import WrongPath from './WrongPath';
import Checkauth from './hoc/Checkauth';
import Layout from './Layout';
import Leaderboard from './Leaderboard';


function App({dispatch}) {
  // http://localhost:3000/poll/loxhs1bqm25b708cmbf3g
  useEffect(()=> {
    dispatch(initialData())
  }, [])
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={
              <Checkauth>
                <Home />
              </Checkauth>
          } />
          <Route path='poll/:id' element={
            <Checkauth>
              <Poll/>
            </Checkauth>
          }/>
          <Route path='auth' element={
              <Authorization />
          }/>
          <Route path='create' element={
              <Checkauth>
                <CreatePoll />
              </Checkauth>
          }/>
          <Route path='leaderboard' element={
              <Checkauth>
                <Leaderboard />
              </Checkauth>
          }/>
          <Route path='*' element={<WrongPath />}/>
        </Route>
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
