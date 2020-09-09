import React, { Component } from "react";
import tournaments from "../tournaments.json";

export default class Tournaments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tournaments: tournaments
    };
  }
  render() {
    return (
      <div>
        <h1>Tournaments</h1> <br />
        <div className="Tournaments">
          {this.state.tournaments &&
            this.state.tournaments
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
              .map((tournament, i) => (
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
              ))}
        </div>
      </div>
    );
  }
}
