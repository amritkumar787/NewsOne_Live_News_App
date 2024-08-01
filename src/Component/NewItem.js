// Useful Imports
import React from "react";


// React Class Based Component
export default function NewItem(props){
    return (
      <div className="card my-2" style={{border:'1px groove black'}}>
        <img src={!props.imageUrl?"https://static.toiimg.com/thumb/msid-106521555,width-1070,height-580,imgsize-47982,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg":props.imageUrl} className="card-img-top" alt="newsImage" />
        <div className="card-body">
        <span className="badge rounded-pill text-bg-warning">Source : {props.source}</span>
          <h5 className="card-title">{props.title}....</h5>
          <p className="card-text">
            {props.description}....
          </p>
          <a href={props.url} target=" " className="btn btn-sm btn-dark">
            Read More
          </a>
          <p className="card-text"><small className="text-body-secondary">By - {props.author} on {new Date(props.publishedAt).toUTCString()}</small></p>
        </div>
      </div>
    );
}