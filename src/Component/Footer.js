import React from 'react'
import Desc from './Desc';
import LinkComp from './LinkComp';
export default function Footer(){
    return (
        <div className="footer" style={{backgroundColor:'#212529',color:'white',display:'flex',justifyContent:'space-between'}}>
            <Desc/>
            <LinkComp/>
        </div>
    )
}