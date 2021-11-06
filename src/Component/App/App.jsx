import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar';
import {Home} from '../Home/Home';
import About from '../About/About';
import Login from '../Login/Login';
import {Movies} from '../Movies/Movies';
import Notfound from '../Notfound/Notfound';
import Register from '../Register/Register';
import {Tvshows} from '../Tvshows/Tvshows';
import HomeDetails from '../HomeDetails/HomeDetails';
import MoviesDetails from '../MoviesDetails/MoviesDetails';
import TvShowsDetails from '../TvShowsDetails/TvShowsDetails';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { Redirect, Route, Switch, useHistory } from 'react-router';

export default function App() {
  let history = useHistory();
  let [loginData,setLoginData] = useState(null);
  useEffect(()=> {
    if(localStorage.getItem('userData'))
    {
      getUserData();
    }
  }, [])
  function getUserData() 
  {
    let userData = JSON.parse(localStorage.getItem('userData'));
    setLoginData(userData);
  }
  function loguot() 
  {
    localStorage.removeItem('userData');
    setLoginData(null);
    history.push('/login');
  }
  return (
    <div>
      <Navbar loginData={loginData} loguot={loguot}/>
      <div className='container'>
        <Switch>
          <Redirect exact from='/' to='/home'/>
          <ProtectedRoute path='/home' exact component={Home} />
          <ProtectedRoute path='/about' component={About} />
          <ProtectedRoute path='/movies' exact component={Movies} />
          <ProtectedRoute path='/tvshows' exact component={Tvshows} />
          <ProtectedRoute path='/home/:id' exact component={HomeDetails} render={(props)=><HomeDetails {...props}/>} />
          <ProtectedRoute path='/movies/:id' exact component={MoviesDetails} render={(props)=><MoviesDetails {...props}/>} />
          <ProtectedRoute path='/tvshows/:id' exact component={TvShowsDetails} render={(props)=><TvShowsDetails {...props}/>} />
          <Route path='/register' render={(props)=><Register {...props}/>} ></Route>
          <Route path='/login' render={(props)=><Login getUserData={getUserData} {...props}/>} ></Route>
          <Route path='*' component={Notfound} ></Route>
        </Switch>
      </div>
    </div>
  )
}
