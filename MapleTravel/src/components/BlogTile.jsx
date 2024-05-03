import React from "react";
export default function BlogTile(props) {
    return (
        <div className="blogtile">
            <img className="blogtile--image" src={`../images/${props.img}`} />
            <div className="blogtile--details">
                <h3 className="blogtile--location"><span className="blogtile--location--city">{props.city}</span>, <span className="blogtile--location--province">{props.province}</span></h3>
                <h2 className="blogtile--title">{props.title}</h2>
                <p className="blogtile--description">{props.description}</p>
                <h3 className="blogtile--date">Submitted on {props.date}</h3>
                <p className="blogtile--mapslink"><a href={props.google_maps}>View in Google Maps &#x2192;</a></p>
            </div>
        </div>
    )
}