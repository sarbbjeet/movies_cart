import React, { Component } from "react";
import { deleteMovie, getMovies } from "../services/httpMovies";
import paginate from "../utils/paginate";
import ListGroup from "./common/listGroup";
import Pagination from "./common/pagination";
import MoviesTable from "./moviesTable";
import _ from "lodash";
import { Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";

export default class Movies extends Component {
  state = {
    movies: [],
    selectedPage: 1,
    pageSize: 4,
    searchtext: "",
    selectedGenre: "",
    sortedColumn: { path: "title", order: "asc" },
  };

  deleteMovie = async (movie) => {
    /*to improve the response time  
  update state before delete movie from database
  when we delete movie from the database before the state, 
  it takes some time to show the final result 
  */
    const oldMovies = this.state.movies;
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies });
    try {
      await deleteMovie(movie);
    } catch (ex) {
      //if error to delete movie from database then set old movies to the state
      this.setState({ movies: oldMovies });
    }
  };

  //handle pagination page select event
  handlePageChange = (pageNum) => {
    this.setState({ selectedPage: pageNum });
  };

  searchOnChange = ({ currentTarget }) => {
    this.handleGenreSelect(""); //reset genre filter and pagination
    this.setState({ searchtext: currentTarget.value });
  };

  //filter movies by using genre
  handleGenreFilter = () => {
    if (
      this.state.selectedGenre === "" ||
      this.state.selectedGenre === "All Genres"
    ) {
      if (!(this.state.searchtext === ""))
        //filter movies using search bar .
        return this.state.movies.filter((m) =>
          m.title.toLowerCase().startsWith(this.state.searchtext.toLowerCase())
        );
      return this.state.movies;
    }
    return this.state.movies.filter(
      (m) => m.genre.name === this.state.selectedGenre
    );
  };

  /* when user click on any genre button then pagination go back to 
    1st page that why selectedPage:1 */
  handleGenreSelect = (genre) =>
    this.setState({ selectedGenre: genre, selectedPage: 1, searchtext: "" });

  //save sortedcolumn data to this.state sortedcolumn={path:'title', order:'asc'}
  handleSort = (sortedColumn) => this.setState({ sortedColumn });

  //display movies count
  displayMoviesCount = (movies) => {
    if (movies.length === 0) return `sorry no movie available`;
    return `Total ${movies.length} movies are available.`;
  };

  // life cycle hook to read movies from js file
  async componentDidMount() {
    const { data: movies } = await getMovies();
    this.setState({ movies });
  }
  render() {
    //object destructuring

    const { movies, selectedPage, pageSize, selectedGenre, sortedColumn } =
      this.state;
    const filtered = this.handleGenreFilter(); //get filtered data
    const { length: count } = filtered; //get length of movies and use as count variable
    const numberOfPage = Math.ceil(count / pageSize);
    //sorted columns according to the user event on the movie table header
    const sorted = _.orderBy(
      filtered,
      [sortedColumn.path],
      [sortedColumn.order]
    );
    //paginate after filtering data
    const paginateItems = paginate(sorted, pageSize, selectedPage);

    return (
      <>
        <Row>
          <Col className="col-2">
            <ListGroup
              selectedGenre={selectedGenre}
              handleGenreSelect={this.handleGenreSelect}
            />
          </Col>

          {/* movie table */}
          <Col>
            {this.props.user && this.props.user.admin && (
              <Link className="btn btn-primary m-4" to="/movies/new">
                Add Movie
              </Link>
            )}
            <h3>{this.displayMoviesCount(movies)}</h3>

            <div className="mb-3">
              <input
                name="search"
                id="search"
                className="form-control"
                autoComplete="off"
                placeholder="Search.."
                value={this.state.searchtext}
                onChange={this.searchOnChange}
              />
            </div>
            <MoviesTable
              deleteMovie={this.deleteMovie}
              movies={paginateItems}
              onSort={this.handleSort}
              sortedColumn={sortedColumn}
            />
            {/* pagination under movie table same column  */}
            <Pagination
              numberOfPage={numberOfPage}
              selectedPage={selectedPage}
              handlePageChange={this.handlePageChange}
            />
          </Col>
        </Row>
      </>
    );
  }
}
