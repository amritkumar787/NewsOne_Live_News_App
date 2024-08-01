// Imports
import './App.css';
import Navbar from './Component/Navbar.js';
import News from './Component/News.js';
import Footer from './Component/Footer.js';
import React, { Component } from 'react';
import LoadingBar from 'react-top-loading-bar';
import{
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';


// React Class Based Component
export default class App extends Component{
  
  apiKey = process.env.REACT_APP_NEWS_API;
  state = {
    progress:0
  }

  setProgress = (progress)=>{
    this.setState({progress:progress})
  }
  render(){
    return (
      <>
      <Router>
        <Navbar/>
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
       />
        <Routes>
          {/* Giving each component's element a unique key will help the same component render again, if we dont do soo then links o different categories of News setProgress={this.setProgress} will not work */}
          <Route exact  path='/' element={<News setProgress={this.setProgress} apikey = {this.apiKey} pageSize={10} key='sherr' country={"in"} category={"general"}/>}></Route>
          <Route exact  path='/business' element={<News setProgress={this.setProgress} apikey = {this.apiKey} pageSize={10} key='business' country={"in"} category={"business"}/>}></Route>
          <Route exact  path='/entertainment' element={<News setProgress={this.setProgress} apikey = {this.apiKey} pageSize={10} key='business' country={"in"} category={"entertainment"}/>}></Route>
          <Route exact path='/science' element={<News setProgress={this.setProgress} apikey = {this.apiKey} pageSize={10} country={"in"} key='science' category={"science"}/>}></Route>
          <Route exact  path='/general' element={<News setProgress={this.setProgress} apikey = {this.apiKey} pageSize={10} country={"in"} key='general' category={"general"}/>}></Route>
          <Route exact  path='/sports' element={<News setProgress={this.setProgress} apikey = {this.apiKey} pageSize={10} country={"in"} key='sports' category={"sports"}/>}></Route>
          <Route exact  path='/technology' element={<News setProgress={this.setProgress} apikey = {this.apiKey} pageSize={10} country={"in"} key='technology' category={"technology"}/>}></Route>
          <Route exact  path='/health' element={<News setProgress={this.setProgress} apikey = {this.apiKey} pageSize={10} country={"in"} key='health' category={"health"}/>}></Route>
        </Routes>
        <Footer/>
      </Router>
      </>
    )
  }
}