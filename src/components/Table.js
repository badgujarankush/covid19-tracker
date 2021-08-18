import React from "react";
import "./Table.css";
import numeral from "numeral";
function Table({ regions,filtered }) {

  return (
    <div className="table">
    <table>
      <thead>
      <tr>
        <th>Region</th>
        <th>Total Cases</th>
        <th>New Cases</th>
        <th>Active</th>
        <th>Recovered</th>
        <th>Deaths</th>
        </tr>
      </thead>

      {regions.map((region) => region.reg.toLowerCase().includes(filtered.toLowerCase()) &&(
          <tbody >
        <tr>
          <td>{region.reg}</td>
          <td>{numeral(region.totalcases).format("0,0")}</td>
          <td>{numeral(region.today).format("0,0")}</td>
          <td>{numeral(region.active).format("0,0")}</td>
          <td>{numeral(region.recovered).format("0,0")}</td>
          <td>{numeral(region.deaths).format("0,0")}</td>
        </tr>
        </tbody>
      ))}
      </table>
    </div>
  );
}

export default Table;
