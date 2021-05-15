import React from "react";
import "./app.css";
import PropTypes from "prop-types";
import axios from "axios";
import Movie from "./Movie";

class App extends React.Component{
  state = {
    isLoading : true,
    movies : []
  }
  getMovies = async ()=>{
    const movie = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    const {movies} = movie.data.data;
    this.setState({movies : movies,isLoading:false});
  }
  componentDidMount(){
    this.getMovies();
  }

  render(){
    const {isLoading,movies} = this.state;
    return(
      <div>{isLoading ? "Loading..." : movies.map(movie=>(
        <Movie key = {movie.id} title = {movie.title} year = {movie.year} rating = {movie.rating} summary = {movie.summary} poster = {movie.medium_cover_image} />
      ))}</div>
    )
  }

}
export default App;