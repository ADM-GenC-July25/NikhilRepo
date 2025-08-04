import React from 'react'
import Developer from './Developer';

function DeveloperBio(props) {
    return (
        <div className="card d-inline-block text-dark">
            <div className="card-body">
                <h1 className="card-title">{props.developer.firstName} {props.developer.lastName}</h1>
                <p className="card-text">
                    <span className="bold">Favorite Language: {props.developer.favoriteLanguage} </span>
                </p>
                <p className="card-text">
                    <span className="bold">Year Started: {props.developer.yearStarted} </span>
                </p>
            </div>
        </div>
    );
}
export default DeveloperBio