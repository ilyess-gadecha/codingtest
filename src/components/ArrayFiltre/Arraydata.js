import React from 'react';
import Table from 'react-bootstrap/Table';

function Arraydata() {
  // Dummy data
  const data = [
    {
      domicile: 'USA',
      name: 'Fund A',
      ticker: 'FUND-A',
      ter: '0.05',
      nav: '100',
      aum: '1000000',
      asOfDate: '2023-09-22',
    },
    {
      domicile: 'Europe',
      name: 'Fund B',
      ticker: 'FUND-B',
      ter: '0.08',
      nav: '80',
      aum: '800000',
      asOfDate: '2023-09-22',
    },
    {
      domicile: 'Europe',
      name: 'Fund B',
      ticker: 'FUND-B',
      ter: '0.08',
      nav: '80',
      aum: '800000',
      asOfDate: '2023-09-22',
    },
    {
      domicile: 'Europe',
      name: 'Fund B',
      ticker: 'FUND-B',
      ter: '0.08',
      nav: '80',
      aum: '800000',
      asOfDate: '2023-09-22',
    },
    {
      domicile: 'Europe',
      name: 'Fund B',
      ticker: 'FUND-B',
      ter: '0.08',
      nav: '80',
      aum: '800000',
      asOfDate: '2023-09-22',
    },
    {
      domicile: 'Europe',
      name: 'Fund B',
      ticker: 'FUND-B',
      ter: '0.08',
      nav: '80',
      aum: '800000',
      asOfDate: '2023-09-22',
    },
    {
      domicile: 'USA',
      name: 'Fund A',
      ticker: 'FUND-A',
      ter: '0.05',
      nav: '100',
      aum: '1000000',
      asOfDate: '2023-09-22',
    },
    {
      domicile: 'USA',
      name: 'Fund A',
      ticker: 'FUND-A',
      ter: '0.05',
      nav: '100',
      aum: '1000000',
      asOfDate: '2023-09-22',
    },
    {
      domicile: 'USA',
      name: 'Fund A',
      ticker: 'FUND-A',
      ter: '0.05',
      nav: '100',
      aum: '1000000',
      asOfDate: '2023-09-22',
    },
    {
      domicile: 'USA',
      name: 'Fund A',
      ticker: 'FUND-A',
      ter: '0.05',
      nav: '100',
      aum: '1000000',
      asOfDate: '2023-09-22',
    },
    {
      domicile: 'USA',
      name: 'Fund A',
      ticker: 'FUND-A',
      ter: '0.05',
      nav: '100',
      aum: '1000000',
      asOfDate: '2023-09-22',
    },
    {
      domicile: 'USA',
      name: 'Fund A',
      ticker: 'FUND-A',
      ter: '0.05',
      nav: '100',
      aum: '1000000',
      asOfDate: '2023-09-22',
    },
    // Add more data items as needed
  ];

  return (
    <div className="table-container">
      <Table striped bordered hover>
        <thead className="thead-dark">
          <tr>
            <th className="bold-border" style={{ borderBottomWidth: '4px',color:'bla'  }}>#</th>
            <th className="bold-border" style={{ borderBottomWidth: '4px' }}>Domicile</th>
            <th className="bold-border" style={{ borderBottomWidth: '4px' }}>Name</th>
            <th className="bold-border" style={{ borderBottomWidth: '4px' }}>Ticker</th>
            <th className="bold-border" style={{ borderBottomWidth: '4px' }}>TER</th>
            <th className="bold-border" style={{ borderBottomWidth: '4px' }}>NAV</th>
            <th className="bold-border" style={{ borderBottomWidth: '4px' }}>AUM</th>
            <th className="bold-border" style={{ borderBottomWidth: '4px' }}>As of Date</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.domicile}</td>
              <td>{item.name}</td>
              <td>{item.ticker}</td>
              <td>{item.ter}</td>
              <td>{item.nav}</td>
              <td>{item.aum}</td>
              <td>{item.asOfDate}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Arraydata;
