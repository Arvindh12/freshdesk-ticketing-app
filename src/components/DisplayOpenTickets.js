import React from 'react'
import Ticketcard from './Ticketcard'
function DisplayOpenTickets({data,handleResolveChange , handleEditTicket}) {
 

    return (
        <div>
            {data.filter((ticket) => ticket.status === "unresolved").map(ticket => <Ticketcard ticket ={ticket} handleResolveChange={handleResolveChange} key ={ticket.id} handleEditTicket ={handleEditTicket} /> )}
        </div>
    )
}

export default DisplayOpenTickets
