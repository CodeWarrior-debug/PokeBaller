import React from 'react'
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

const Navbar = () => {
  return (
    <>
            <nav className="navbar justify-content-end navbar-dark bg-dark">
        <ul className="nav justify-content-end">
          <li className="nav-item dropdown">
            <DropdownButton
              className="nav-link"
              id="navbarDropdownMenuLink"
              title="COLLECTION"
            >
              <Dropdown.Item className="text-center" href="/collection">
                VIEW
              </Dropdown.Item>
              <Dropdown.Item className="text-center" href="/add">
                ADD
              </Dropdown.Item>
            </DropdownButton>
          </li>
          <li>
            <a className="nav-link active logout" href="/login">
              LOGOUT
            </a>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
