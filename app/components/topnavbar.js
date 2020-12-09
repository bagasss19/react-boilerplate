import React from 'react';

import { Navbar } from 'react-bootstrap';
import 'react-pro-sidebar/dist/css/styles.css';

function Topnavbar() {
  return (
    <>
      <Navbar bg="light" expand="lg" className={{border : "2px"}}>
        <Navbar.Brand href="/">
          <img
            src="https://codemi.co.id/wp-content/uploads/2019/08/codemi-394x150.png"
            width="125"
            height="50"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" />
      </Navbar>
    </>
  );
}

export default Topnavbar;
