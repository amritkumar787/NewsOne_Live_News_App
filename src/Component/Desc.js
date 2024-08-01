import React from  'react'
import urlImage from '../Assets/logo.png';

export default function Desc(){
    return (
      <div className="container">
        <div className="tille-name my-3 d-flex">
            <img className='mx-3' src= {urlImage}  alt="logo" style={{height:'40px', width:'40px'}}/>
            <h4 className='mx-1'style={{marginTop:'5px',color:'rgba(255, 255, 255, 0.88)'}}>NewsOne</h4>
        </div>
        <div className="des" style={{fontSize:'14px',color:'rgba(255, 255, 255, 0.66)'}}>
            <div className="description mx-3">
                <p style={{margin:'3px'}}>Designed and built with all the love in the world by the NewsOne team with all the sources mentioned.</p>
            </div>
            <div className="license mx-3">
                <p style={{margin:'3px'}}>Code licensed bootstrap, news by News API</p>
            </div>
            <div className="version mx-3">
                <p style={{margin:'3px'}}>version v1.1.4</p>
            </div>
        </div>
      </div>
    )
}