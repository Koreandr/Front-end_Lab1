import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import Logo from './logo.png';
import Info from './INFO.png'

export default function Header() {
    return (
        <header>
          <div class="container center-nav">
            <nav class=" navbar navbar-expand-lg  ">
              <a href="#" class="navbar-brand">
                <img src={Logo} alt="logo" width="64px" height="64px" />
              </a>
              <a href="#/main" class="navbar-brand">
                {/* <img src={Info} alt="logo" width="64px" height="64px" /> */}
                <p class="header__logo">INFO</p>
              </a>
            </nav>
          </div>
        </header>
    )
}
