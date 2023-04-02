import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";

function ContentComponent() {
  const [exchangeRate, setExchangeRate] = useState({});

  useEffect(() => {
    fetch(
      `https://api.currencyfreaks.com/latest?apikey=f446313a9bb84a4fb85c4786e60b2906`
    )
      .then((res) => res.json())
      .then((data) => {
        setExchangeRate(data.rates);
      })
      .catch((er) => {
        console.log(er);
      });
  }, []);

  return (
    <Container
      style={{
        color: "white",
        border: "none",
        marginTop: "30px",
        marginBottom: "50px",
      }}
    >
      <Table style={{ color: "white" }}>
        <thead>
          <tr>
            <th>Currency</th>
            <th>We Buy</th>
            <th>Exchange Rate</th>
            <th>We Sell</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>CAD</td>
            <td>1.44318405</td>
            <td>{exchangeRate.CAD}</td>
            <td>1.30573795</td>
          </tr>
          <tr>
            <td>EUR</td>
            <td>0.981752912</td>
            <td>{exchangeRate.EUR}</td>
            <td>0.8882526346</td>
          </tr>
          <tr>
            <td>IDR</td>
            <td>16129.756833772</td>
            <td>{exchangeRate.IDR}</td>
            <td>14593.589516269</td>
          </tr>
          <tr>
            <td>JPY</td>
            <td>138.43235</td>
            <td>{exchangeRate.JPY}</td>
            <td>125.2483166666</td>
          </tr>
          <tr>
            <td>CHF</td>
            <td>0.9274089336</td>
            <td>{exchangeRate.CHF}</td>
            <td>0.9227834526</td>
          </tr>
          <tr>
            <td>GBP</td>
            <td>0.8620685936</td>
            <td>{exchangeRate.GBP}</td>
            <td>0.7799668228</td>
          </tr>
        </tbody>
      </Table>
      <div style={{ textAlign: "center" }}>
        Rates are based from 1 USD.
        <br />
        This application uses API from https://currencyfreaks.com/
      </div>
    </Container>
  );
}

export default ContentComponent;
