import React from 'react'

function Ticketcard({ticket ,handleResolveChange}) {
    console.log(ticket)
    return (
    <div className="card">
  <h5 className="card-header">{ticket.name} <span className="float-right"  >{ticket.priority}</span></h5>
  <div className="card-body">
    <h6 className="card-title">Agent {ticket.id}</h6>
    <h6 className="card-title">Contact : {ticket.contact}</h6>
    <p className="card-text">{ticket.description}</p>
    <button className="btn btn-primary" onClick={() => handleResolveChange(ticket.id)} >{ticket.status}</button>
    <a href="#" className="btn btn-primary float-right">Edit</a>
  </div>
</div>
    )
}

export default Ticketcard
