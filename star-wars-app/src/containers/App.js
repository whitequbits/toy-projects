import React from "react";
import "tachyons";
import "./App.css";
import Title from "../components/Title";
import SearchBar from "../components/SearchBar";
import MovieCardlist from "../components/MovieCardlist";
import PeopleCardlist from "../components/PeopleCardlist";
import Scroll from "../components/Scroll";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      people: [],
      searchfield: ""
    };
  }

  componentDidMount() {
    fetch("https://cors-anywhere.herokuapp.com/https://swapi.co/api/films")
      .then(responses => {
        return responses.json();
      })
      .then(film => {
        this.setState({ movies: film.results });
      })
      .catch("Oooops");

    fetch("https://cors-anywhere.herokuapp.com/https://swapi.co/api/people")
      .then(responses => {
        return responses.json();
      })
      .then(people => {
        this.setState({ people: people.results });
      });
  }

  onSearchChange = event => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const { movies, people, searchfield } = this.state;
    const filteredMovie = movies.filter(movie => {
      return movie.title.toLowerCase().includes(searchfield.toLowerCase());
    });
    const filteredPeople = people.filter(person => {
      return person.name.toLowerCase().includes(searchfield.toLowerCase());
    });

    return (
      <div className="App">
        <Title />
        <SearchBar searchChange={this.onSearchChange} />
        <div className="subtitle tc f1">Movies</div>
        <Scroll>
          <MovieCardlist input={filteredMovie} />
        </Scroll>
        <div className="subtitle tc f1">People</div>
        <Scroll>
          <PeopleCardlist input={filteredPeople} />
        </Scroll>
      </div>
    );
  }
}

export default App;
