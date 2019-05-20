import React from "react";
import Form from "./common/form";
import Joi from "joi-browser";
import { getGenres } from "../services/genreService";
import { getMovie, saveMovie } from "../services/movieService";
import { async } from "q";

class MovieForm extends Form {
  state = {
    data: {
      title: "",
      genreId: "",
      numberInStock: "",
      dailyRentalRate: ""
    },
    errors: {},
    genres: []
  };

  componentDidMount = async () => {
    await this.populateGenre();
    await this.populateMovie();
  };

  populateGenre = async () => {
    const { data } = await getGenres();
    this.setState({ genres: data });
  };

  populateMovie = async () => {
    const { match, history } = this.props;

    const movieId = match.params.id;
    if (movieId !== "new") {
      try {
        const { data: movie } = await getMovie(movieId);
        const data = {
          _id: movie._id,
          title: movie.title,
          genreId: movie.genre._id,
          numberInStock: movie.numberInStock,
          dailyRentalRate: movie.dailyRentalRate
        };

        return this.setState({ data: data });
      } catch (err) {
        if (err.response && err.response.status === 404)
          return history.replace("/not-found");
      }
    }
  };

  schema = {
    _id: Joi.string(),
    title: Joi.string()
      .required()
      .label("Title"),
    genreId: Joi.required().label("Genre"),

    numberInStock: Joi.number()
      .required()
      .min(0)
      .max(100)
      .label("Number in stock"),
    dailyRentalRate: Joi.number()
      .required()
      .min(0)
      .max(10)
      .label("Daily Rental Rate")
  };

  doSubmit = async () => {
    await saveMovie(this.state.data);
    console.log("Movie submitted");
    this.props.history.push("/movies");
  };

  render() {
    const { match } = this.props;
    const { genres } = this.state;
    const genreOptions = [];

    genres.map(genre => {
      return genreOptions.push({ value: genre._id, title: genre.name });
    });

    return (
      <div>
        {/* <h1>Movie Form {match.params.id}</h1> */}
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("title", "Title")}
          {this.renderSelect("genreId", "Genre", genreOptions)}
          {this.renderInput("numberInStock", "Number in stock")}
          {this.renderInput("dailyRentalRate", "Rate")}

          {this.renderButton("Add Movie")}
        </form>
      </div>
    );
  }
}

export default MovieForm;
