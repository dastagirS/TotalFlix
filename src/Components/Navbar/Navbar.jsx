import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHome } from "@fortawesome/free-solid-svg-icons"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { faPaperPlane } from "@fortawesome/fontawesome-free-regular"
import { faMugHot } from "@fortawesome/free-solid-svg-icons"
import { faUser } from "@fortawesome/fontawesome-free-regular"




import './Navbar.css'


const Navbar = () => {
    return (
        <div>
           <nav class="sidenav">
    <ul class="main-buttons">
      <li>
      <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
      </li>
      <li>
      <FontAwesomeIcon icon={faHome}></FontAwesomeIcon>
      </li>
      <li>
      <FontAwesomeIcon icon={faPaperPlane}></FontAwesomeIcon>
      </li>
      <li>
      <FontAwesomeIcon icon={faMugHot}></FontAwesomeIcon>
      </li>
      <li>
      <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
      </li>
    </ul>
</nav>

        </div>
    )
}

export default Navbar
