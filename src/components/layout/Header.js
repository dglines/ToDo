import React from "react"
import { FaPizzaSlice } from "react-icons/fa" // TODO: look up more on font awesome

export const Header = () => (
  <header className="header" data-testid="header">
    <nav>
      <div className="logo"></div>
      <div className="settings">
        <ul>
          <li>+</li>
          <li>
            <FaPizzaSlice />
          </li>
        </ul>
      </div>
    </nav>
  </header>
)
