import React from 'react'
import Ticketcard from './Ticketcard'

function DisplayClosedTickets({data, handleResolveChange,handleEditTicket}) {
    return (
        <div>
            <h2>Resolved Tickets</h2>
            {data.filter((ticket) => ticket.status === "resolved").length === 0 ? <p>No tickets here</p> : <div></div> }
             {data.filter((ticket) => ticket.status === "resolved").map(ticket => <Ticketcard ticket ={ticket} handleResolveChange={handleResolveChange} key ={ticket.id} handleEditTicket={handleEditTicket}/> )}
        </div>
    )
}

export default DisplayClosedTickets
