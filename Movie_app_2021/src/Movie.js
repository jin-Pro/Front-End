import React from "react";
import PropTypes from "prop-types";

function Movie({title,year,rating,summary,poster}){
    return(
        <div>
            <h2>{title}</h2>
            <div>{year}</div>
            <div>{rating}/10.0</div>
            <div>{summary}</div>
            <img src={poster}></img>
        </div>
    )
}

Movie.propTypes = {
    id : PropTypes.number,
    year : PropTypes.number.isRequired,
    title : PropTypes.string.isRequired,
    rating : PropTypes.number.isRequired,
    summary : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired
};
export default Movie;