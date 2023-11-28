import React, { useState, useEffect } from "react";
import "./Data.css"; // Import a CSS file for styling

function Data() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Replace with your API endpoint URL
    fetch("/api")
      .then((response) => response.json())
      .then((jsonData) => {
        setData(jsonData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="data-container">
      <h1>Security Data</h1>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Currency</th>
              <th>Market Sector</th>
              <th>Exchange Code</th>
              <th>Security Type</th>
              <th>Country of Issue</th>
              <th>Security Type 2</th>
              <th>Futures Category</th>
              <th>Last Tradeable Date</th>
              <th>Futures Exchange Name</th>
              <th>Futures Contract Size</th>
              <th>Futures Tick Size</th>
              <th>Futures Tick Value</th>
              <th>Futures Generic Month</th>
              <th>Futures First Trade Date</th>
              <th>Cash Settled</th>
              <th>Futures Trading Units</th>
              <th>Quote Units</th>
              <th>Futures Month Year</th>
              <th>Futures Contract Date</th>
              <th>ID BB Global</th>
              <th>ID BB Global Company</th>
              <th>ID BB Global Name</th>
              <th>Quoted Currency</th>
              <th>Ticker</th>
              <th>CUSIP</th>
              <th>ISIN</th>
              <th>SEDOL</th>
              <th>ICRA Rating</th>
              <th>Moody's Rating</th>
              <th>Crisil Rating</th>
              <th>Website</th>
              <th>Active Switch</th>
              <th>Security Description</th>
              {/* Add more table headers for your data */}
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.ID_BB_GLOBAL}>
                <td>{item.id}</td>
                <td>{item.NAME}</td>
                <td>{item.CRNCY}</td>
                <td>{item.MARKET_SECTOR}</td>
                <td>{item.EXC_CODE}</td>
                <td>{item.SECURITY_TYPE}</td>
                <td>{item.CNTRY_ISSUE}</td>
                <td>{item.SECURITY_TYPE2}</td>
                <td>{item.FUTURES_CATEGORY}</td>
                <td>{item.LAST_TRADEABLE_DT.substring(0, 10)}</td>
                <td>{item.FUR_EXCH_NAME_LONG}</td>
                <td>{item.FUT_CONT_SIZE}</td>
                <td>{item.FUT_TICK_SIZE}</td>
                <td>{item.FUT_TICK_VALUE}</td>
                <td>{item.FUT_GEN_MONTH}</td>
                <td>{item.FUT_FIRST_TRADE_DT}</td>
                <td>NA</td>
                <td>{item.FUT_TRADING_UNITS}</td>
                <td>{item.QUOTE_UNITS}</td>
                <td>{item.FUT_MONTH_YEAR}</td>
                <td>{item.FUT_CONTRACT_DATE}</td>
                <td>{item.ID_BB_GLOBAL}</td>
                <td>{item.ID_BB_GLOBAL_COMPANY}</td>
                <td>{item.ID_BB_GLOBAL_NAME}</td>
                <td>{item.QUOTED_CURRENCY}</td>
                <td>{item.TICKER}</td>
                <td>{item.CUSIP}</td>
                <td>{item.ISIN}</td>
                <td>{item.SEDOL}</td>
                <td>{item.ICRA_RATING}</td>
                <td>{item.MOODY_RATING}</td>
                <td>{item.CRISIL_RATING}</td>
                <td>{item.WEBSITE}</td>
                <td>{item.ACTIVE_SWITCH}</td>
                <td>{item.SEC_DESCRIPTION}</td>
                {/* Add more table cells for other data properties */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Data;
