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


function App({dispatch, users, questions, authed, loading}) {
  const navigate = useNavigate()
  useEffect(()=> {
    dispatch(initialData())
  }, [])
  return (
    <Fragment>
      <div className="App">
        <NavMenu />
        <LoadingBar />
      </div>
      {
        authed.status === null ? 
        (
          // <div className='notice'>
          // If you want to use this app go to do
          // <Link to="/auth">Auth</Link>
          // </div>
          <Navigate to="/auth" />
        ) :
        "NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN"
      }
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/poll/:id' element={<Poll/>}/>
        <Route exact path='/auth' element={<Authorization />}/>
        <Route exact path='/create' element={<CreatePoll />}/>
        
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
