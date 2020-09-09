import React, { Component } from "react";
import tournaments from "../tournaments.json";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tournaments: tournaments,
      search: "",
      filter: false
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
  }
  handleSearch(event) {
    this.setState({
      search: event.target.value
    });
  }
  handleCheck(event) {
    this.setState({
      filter: event.target.checked
    });
  }
  render() {
    let tournamentSearch = this.state.tournaments
      .sort((a, b) => {
        a = a.date_start
          .split(" ")
          .slice(0, 1)
          .toString()
          .split("-")
          .join("");
        b = b.date_start
          .split(" ")
          .slice(0, 1)
          .toString()
          .split("-")
          .join("");
        return a > b ? 1 : a < b ? -1 : 0;
      })
      .filter(tournament =>
        tournament.name.toLowerCase().includes(this.state.search.toLowerCase())
      );
    let filterSearch = this.state.tournaments
      .sort((a, b) => {
        a = a.date_start
          .split(" ")
          .slice(0, 1)
          .toString()
          .split("-")
          .join("");
        b = b.date_start
          .split(" ")
          .slice(0, 1)
          .toString()
          .split("-")
          .join("");
        return a > b ? 1 : a < b ? -1 : 0;
      })
      .filter(tournament =>
        tournament.series.name
          .toLowerCase()
          .includes(this.state.search.toLowerCase())
      );

    return (
      <div className="Home">
        <h1>Make a search</h1>
        <div className="search-form">
          <input
            placeholder="Search for name"
            onChange={this.handleSearch}
            type="text"
          />
          <small>Filter by:</small>
          <input name="series" onChange={this.handleCheck} type="checkbox" />
          <label htmlFor="series">
            <small>Series</small>
          </label>
        </div>

        <div className="Search">
          {this.state.search === "" ? (
            <div />
          ) : this.state.filter ? (
            filterSearch.map((tournament, i) => (
              <ul key={i} className="box">
                <li>{tournament.name}</li>
                <li>{tournament.series.name}</li>
                <li>
                  {tournament.country} - {tournament.city}
                </li>
                <li>
                  {tournament.date_start
                    .split(" ")
                    .slice(0, 1)
                    .toString()
                    .split("-")
                    .reverse()
                    .join("-")}{" "}
                  to{" "}
                  {tournament.date_end
                    .split(" ")
                    .slice(0, 1)
                    .toString()
                    .split("-")
                    .reverse()
                    .join("-")}
                </li>
              </ul>
            ))
          ) : (
            tournamentSearch.map((tournament, i) => (
              <ul key={i} className="box">
                <li>{tournament.name}</li>
                <li>{tournament.series.name}</li>
                <li>
                  {tournament.country} - {tournament.city}
                </li>
                <li>
                  {tournament.date_start
                    .split(" ")
                    .slice(0, 1)
                    .toString()
                    .split("-")
                    .reverse()
                    .join("-")}{" "}
                  to{" "}
                  {tournament.date_end
                    .split(" ")
                    .slice(0, 1)
                    .toString()
                    .split("-")
                    .reverse()
                    .join("-")}
                </li>
              </ul>
            ))
          )}
        </div>
      </div>
    );
  }
}

export default Home;
