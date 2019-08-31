import React from "react"

export const Header = () => {
  const temp = 1

  return (
    <header className="header" data-testid="header">
      <nav>
        <div className="logo"></div>
        <div className="settings">
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
