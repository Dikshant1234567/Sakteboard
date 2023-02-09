import React from 'react'
import "../styles/header.css"

function Header() {
  return (
    <div className='header'>
        <div className='searchHead'>
            <i class="fa-solid fa-magnifying-glass searchIcon"></i>
            <input type="search" name=" search" id="search" placeholder='Search' />
        </div>
        <div className="profileHead">
            <img src="https://cdn3.vectorstock.com/i/1000x1000/30/97/flat-business-man-user-profile-avatar-icon-vector-4333097.jpg"   alt="" />
            <p>Dikshant</p>
            <i class="fa-solid fa-bell"></i>
        </div>
    </div>
  )
}

export default Header