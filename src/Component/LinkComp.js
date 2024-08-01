import React from 'react'
import {Link} from 'react-router-dom';

export default function LinkComp(){
    return (
      <div className="container gap d-flex justify-content-center" style={{gap:'50px',color:'rgba(255, 255, 255, 0.66)'}}>
        <div className="Nav-Links my-3">
            <h4>Links</h4>
            <Link className="nav-link" to='/business'>Business</Link>
            <Link className="nav-link" to='/entertainment'>Entertainment</Link>
            <Link className="nav-link" to='/general'>General</Link>
            <Link className="nav-link" to='/health'>Health</Link>
            <Link className="nav-link" to='/science'>Science</Link>
            <Link className="nav-link" to='/sports'>Sports</Link>
            <Link className="nav-link" to='/technology'>Technology</Link>
        </div>
        <div className="source-link my-3">
            <h4>Sources</h4>
            <a className="nav-link" href='http://www.getbootstrap.com' rel='noreferrer' target='_blank'>BootStrap - UI/UX</a>
            <a className="nav-link" href='http://www.newsapi.org' rel='noreferrer' target='_blank'>News API - Live News</a>
        </div>
      </div>
    )
}