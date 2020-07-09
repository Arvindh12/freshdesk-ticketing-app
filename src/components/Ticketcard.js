import React from 'react'

function Ticketcard({ticket ,handleResolveChange,handleEditTicket}) {
    console.log(ticket)
    var priorityclass;
   if( ticket.priority === 'High') priorityclass = 'text-danger float-right';
   else if (ticket.priority === 'Medium') priorityclass = 'text-warning float-right';
   else priorityclass = 'text-info float-right';

    return (
    <div className="card">
  <h5 className="card-header">ID:{ticket.id} Name: {ticket.name} <span className= {priorityclass} >{ticket.priority}</span></h5>
  <div className="card-body">
    <h6 className="card-title">Agent : {ticket.agent}</h6>
    <h6 className="card-title">Contact : {ticket.contact}</h6>
    <p className="card-text">Description : {ticket.description}</p>
    <button className="btn btn-primary" onClick={() => handleResolveChange(ticket.id)} >{ticket.status}</button>
    <button  className="btn btn-primary float-right" onClick={() => handleEditTicket(ticket)}>Edit</button>
  </div>
</div>
    )
}

export default Ticketcard
