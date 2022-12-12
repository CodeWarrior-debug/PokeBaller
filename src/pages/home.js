import React from "react";
import LoginHeader from "../components/loginheader"
import Dropdown from 'react-bootstrap/Dropdown'



const Home = () => {
  return (
    <>
      <LoginHeader/>

    <nav className="navbar justify-content-end navbar-dark bg-dark">
      <ul className="nav justify-content-end">
    <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button"  
                data-bs-toggle="dropdown" aria-expanded="false">COLLECTION</a>
    </li>
      <Dropdown/>
      {/* <Dropdown.Toggle>
      
        COLLECTION
      </Dropdown.Toggle> */}

      <Dropdown.Menu className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
        <Dropdown.Item className="dropdown-item" href='#/collection'>VIEW</Dropdown.Item>
        <Dropdown.Item className="dropdown-item" href='#/add'>ADD</Dropdown.Item>
      </Dropdown.Menu>
      </ul>
    </nav>

{/*       
      <nav className="navbar justify-content-end navbar-dark bg-dark">x
    <ul className="nav justify-content-end">x
        <li className="nav-item dropdown">x
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"  x
                data-bs-toggle="dropdown" aria-expanded="false"> */}
                  {/* TODO What was the href to # for? What did that mean?  And why isn't this dropping down?*/}
                {/* COLLECTION */}
            {/* </a>x
            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">x
                <li><a className="dropdown-item" href="/collection">VIEW</a></li>
                <li><a className="dropdown-item" href="/add">ADD</a></li>
            </ul>
        </li>
        <li className="nav-item">
            <a className="nav-link active logout" href="/login">LOGOUT</a>
        </li>
    </ul>
</nav> */}


    </>
  );
};

export default Home;
