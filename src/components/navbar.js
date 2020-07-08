import React from 'react'
import './navbar.css'

function navbar({changeView}) {

    return (
    <>
  <a href="#createTickets" onClick={() => changeView("CreateTickets")}>Create ticket</a>
  <a href="#DisplayOpenTickets" onClick={() => changeView("DisplayOpenTickets")} >View Unresolved</a>
  <a href="#DisplayClosedTickets" onClick={() => changeView("DisplayClosedTickets")} >View Resolved</a>
  <a href="#CreateContact" onClick={() => changeView("CreateContact")}>Contact</a>
  <a href="#CreateAgent" onClick={() => changeView("CreateAgent")} >Agent</a>
    </>
    )
}

export default navbar
