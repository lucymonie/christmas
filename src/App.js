import React, { Component } from 'react'
import './App.css'

import daysList from './daysList'
import Day from './day'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <header className="App-header">
            <h1>
              Christmas in South East London
            </h1>
          </header>
          <ul className="App-list">
            {daysList.map((day, i) =>
              <Day key={i} date={day.date.toString()} events={day.events} />
            )}
          </ul>

          <h2 className="App-list">Events running through December</h2>
          <ul className="App-list">
            <li className="App-list-item">
              <p><a href="http://adventwindows.com/">Greenwich Advent Windows</a><br />
              Where: Greenwich, see map in link above<br />
              When: 1 December 2018 to 3 January 2019</p>
            </li>
            <li className="App-list-item">
              <p><a href="http://www.brownandgreencafe.com/what-s-on">Santa's Grotto at Brown & Green</a><br />
              Where: Brown & Green cafe, Mayow Park, Mayow Rd<br />
              When: Monday 17 December to Friday 21 December<br />
              Booking: Call 020 86760822 or drop in to book. Cost £6.50</p>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default App
