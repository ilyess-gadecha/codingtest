import React from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { FaSearch } from 'react-icons/fa'; // Import the search icon from react-icons/fa
import "./Arrayofdata.css";
import NavOffdata from "./NavOffdata";
import Arraydata from "./Arraydata";
function Arrayofdata() {
  return (
    <>
    <Form inline >
      <Row>
        <Col xs="auto">
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <FaSearch className="search-icon" /> {/* Search icon */}
              </span>
            </div>
            <Form.Control
              type="text"
              placeholder="Search by name, Tickits, ISIN, CUPS"
              style={{ width: "400px" }} // Adjust the width as needed
            />
          </div>
        </Col>
      </Row>
    </Form>
    <NavOffdata />                   
    <Arraydata />
     </>
  );
}

export default Arrayofdata;
