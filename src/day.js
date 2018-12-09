import React from 'react'

const dateHelper = (date) => {
  const dateArray = date.split(' ')
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  const week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
  const day = dateArray[2][0] === '0' ? dateArray[2][1] : dateArray[2]
  return `${week.find(weekday => weekday.includes(dateArray[0]))} ${day} ${months.find(month => month.includes(dateArray[1]))}`
}

const Day = ({ date, events }) => (
  <li className="App-list-item">
    <b>{dateHelper(date)}</b>
    {events.map((event, i) => (
      <p key={i}><a href={event.url} target="_blank" rel="noopener noreferrer">{event.name}</a><br />
      Where: {event.location}<br />
      When: {event.time}<br />
      Age group: {event.agegroup}</p>
    )
    )}
  </li>
)

export default Day
