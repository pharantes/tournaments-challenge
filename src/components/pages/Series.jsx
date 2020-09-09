import React, { Component } from "react";
import tournaments from "../tournaments.json";

export default class Series extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tournaments: tournaments
    };
  }

  render() {
    let starSeries = this.state.tournaments.filter(tournament =>
      tournament.series.name.includes("Star Series")
    );
    let warriorsSeries = this.state.tournaments.filter(tournament =>
      tournament.series.name.includes("Warriors Series")
    );
    let moonSeries = this.state.tournaments.filter(tournament =>
      tournament.series.name.includes("Moon Series")
    );

    return (
      <div>
        <h1>Series</h1>
        {starSeries && warriorsSeries && moonSeries ? (
          <div className="Series">
            <div>
              <h2>Star Series</h2>
              <small>
                {starSeries[0].series.date_start
                  .toString()
                  .split("-")
                  .reverse()
                  .join("-")}{" "}
                to{" "}
                {starSeries[0].series.date_end
                  .toString()
                  .split("-")
                  .reverse()
                  .join("-")}
              </small>
              {starSeries.map((tournament, i) => (
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
            <div>
              <h2>Warriors Series</h2>
              <small>
                {warriorsSeries[0].series.date_start
                  .toString()
                  .split("-")
                  .reverse()
                  .join("-")}{" "}
                to{" "}
                {warriorsSeries[0].series.date_end
                  .toString()
                  .split("-")
                  .reverse()
                  .join("-")}
              </small>
              {warriorsSeries.map((tournament, i) => (
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
            <div>
              <h2>Moon Series</h2>
              <small>
                {moonSeries[0].series.date_start
                  .toString()
                  .split("-")
                  .reverse()
                  .join("-")}{" "}
                to{" "}
                {moonSeries[0].series.date_end
                  .toString()
                  .split("-")
                  .reverse()
                  .join("-")}
              </small>
              {moonSeries.map((tournament, i) => (
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
        ) : (
          <div>Loading...</div>
        )}
      </div>
    );
  }
}
