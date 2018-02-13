import React from 'react';
import PropTypes from 'prop-types'
import LinesEllipsis from "react-lines-ellipsis"
import './css/Movie.css';

function Movie({title , poster ,  synopsis}){
    return (
        <div className="Movie">
            <div className="Movie_Columns">
                <MoviePoster poster={poster} alt={title} />
            </div>                
            <div className="Movie_Columns">
                <h1> {title} </h1>
                {/* <div className="Movie_Genres">
                    {genres.map( (genre,index)=> <MovieGenre genre={genre} key={index}/>)}
                </div>  */}
                <div className="Movie_Synopsis">
                    <LinesEllipsis
                        text={synopsis}
                        maxLine='4'
                        ellipsis=' ...more'
                        trimRight
                        basedOn='letters'
                    />
                </div>
            </div>
            
        </div>
    )   
}

function MoviePoster({poster,alt}){
    return (
        <img src={poster} alt={alt} title={alt} className="Movie_Poster"/> 
    )
}


MoviePoster.propTypes = {
    poster : PropTypes.string.isRequired,
    alt : PropTypes.string.isRequired
}


Movie.propTypes = {
    title   : PropTypes.string.isRequired,
    synopsis: PropTypes.string.isRequired
}

export default Movie;